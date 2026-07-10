import os
import cv2
import torch
import numpy as np
import supervision as sv
from fastapi import UploadFile
from PIL import Image
import io

# We wrap this in try-except because dependencies might not be fully installed or working
# Base paths relative to the application/backend/ml_models
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ML_MODELS_DIR = os.path.join(BASE_DIR, "ml_models")

# Add GroundingDINO to sys.path so we can import from it without installing via pip
import sys
sys.path.append(os.path.join(ML_MODELS_DIR, "GroundingDINO"))

try:
    from groundingdino.util.inference import Model as GroundingDINOModel
    from sam2.build_sam import build_sam2
    from sam2.sam2_image_predictor import SAM2ImagePredictor
    ML_AVAILABLE = True
except ImportError as e:
    ML_AVAILABLE = False
    print(f"Warning: ML features will be disabled due to missing dependencies: {e}")

GDINO_CONFIG_PATH = os.path.join(ML_MODELS_DIR, "GroundingDINO/groundingdino/config/GroundingDINO_SwinT_OGC.py")
GDINO_WEIGHTS_PATH = os.path.join(ML_MODELS_DIR, "GroundingDINO/weights/groundingdino_swint_ogc.pth")

SAM2_CONFIG = "configs/sam2.1/sam2.1_hiera_l.yaml"
SAM2_WEIGHTS_PATH = os.path.join(ML_MODELS_DIR, "GroundingDINO/weights/sam2.1_hiera_large.pt")

# Configuration
TEXT_PROMPT = "plastic bottle . plastic bag . plastic container . plastic cup . plastic wrapper . styrofoam . cardboard box . paper cup . crumpled paper . newspaper . magazine . milk carton . glass bottle . glass jar . broken glass . metal can . aluminum foil . soda can . aerosol can . scrap metal . food waste . banana peel . apple core . egg shell . leaves . battery . electronic waste . cable . mobile phone . laptop . clothing . fabric . rubber tire . cigarette butt . trash . garbage . trash bag . debris ."
BOX_THRESHOLD = 0.35
TEXT_THRESHOLD = 0.25

import threading

gdino_model = None
sam2_predictor = None
models_loaded_event = threading.Event()
processing_lock = threading.Lock()
processing_report_ids = set()

def init_models():
    global gdino_model, sam2_predictor
    if not ML_AVAILABLE:
        print("ML dependencies missing. Cannot initialize models.")
        return

    try:
        if not os.path.exists(GDINO_WEIGHTS_PATH):
            print(f"Warning: Model weights not found at {GDINO_WEIGHTS_PATH}")
            return
            
        device = "cuda" if torch.cuda.is_available() else "cpu"
        if device == "cpu":
            # Optimize PyTorch CPU performance by limiting thread contention
            import multiprocessing
            num_cores = multiprocessing.cpu_count()
            threads = max(1, min(4, num_cores // 2))
            torch.set_num_threads(threads)
            print(f"Configured PyTorch CPU threads to {threads} to prevent core contention.")
            
        print(f"Loading GroundingDINO on {device}...")
        gdino_model = GroundingDINOModel(
            model_config_path=GDINO_CONFIG_PATH,
            model_checkpoint_path=GDINO_WEIGHTS_PATH,
            device=device
        )

        print(f"Loading SAM-2 on {device}...")
        sam2_model = build_sam2(SAM2_CONFIG, SAM2_WEIGHTS_PATH, device=device)
        sam2_predictor = SAM2ImagePredictor(sam2_model)
        print("ML Models loaded successfully.")
        models_loaded_event.set()
    except Exception as e:
        print(f"Failed to load ML models: {e}")
def process_image_bytes(image_bytes: bytes) -> tuple[bytes, dict]:
    """
    Process image bytes with Grounded SAM 2 and return annotated image bytes and detection metadata.
    """
    empty_metadata = {
        "total_count": 0,
        "counts": {},
        "items": []
    }

    if not gdino_model or not sam2_predictor:
        print("Models not loaded. Returning original image.")
        return image_bytes, empty_metadata

    # Convert bytes to numpy array (cv2 format)
    nparr = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Resize image if it exceeds maximum dimension of 800px to optimize CPU performance
    MAX_DIM = 800
    h, w = image.shape[:2]
    if max(h, w) > MAX_DIM:
        scale = MAX_DIM / max(h, w)
        new_w = int(w * scale)
        new_h = int(h * scale)
        image = cv2.resize(image, (new_w, new_h), interpolation=cv2.INTER_AREA)
        print(f"Resized image from {w}x{h} to {new_w}x{new_h} for CPU performance optimization.")

    print(f"Detecting objects matching: '{TEXT_PROMPT}'...")
    with torch.inference_mode():
        detections, phrases = gdino_model.predict_with_caption(
            image=image,
            caption=TEXT_PROMPT,
            box_threshold=BOX_THRESHOLD,
            text_threshold=TEXT_THRESHOLD
        )

    if len(detections.xyxy) == 0:
        print("No objects detected!")
        return image_bytes, empty_metadata

    print(f"Detected {len(detections.xyxy)} objects. Generating masks with SAM-2...")

    with torch.inference_mode():
        # Run SAM-2
        sam2_predictor.set_image(image)
        input_boxes = detections.xyxy

        # Get masks from SAM-2
        masks, scores, _ = sam2_predictor.predict(
            point_coords=None,
            point_labels=None,
            box=input_boxes,
            multimask_output=False,
        )

    # Masks shape is (N, 1, H, W). Squeeze the channel dimension if present.
    if masks.ndim == 4:
        masks = masks.squeeze(1)

    # Add masks to supervision detections
    detections.mask = masks.astype(bool)

    # Annotate image
    print("Annotating image with masks and boxes...")
    mask_annotator = sv.MaskAnnotator(color_lookup=sv.ColorLookup.INDEX)
    box_annotator = sv.BoxAnnotator(color_lookup=sv.ColorLookup.INDEX)
    label_annotator = sv.LabelAnnotator(color_lookup=sv.ColorLookup.INDEX)

    labels = [
        f"{phrase} {confidence:.2f}" 
        for phrase, confidence in zip(phrases, detections.confidence)
    ]

    annotated_image = mask_annotator.annotate(scene=image.copy(), detections=detections)
    annotated_image = box_annotator.annotate(scene=annotated_image, detections=detections)
    annotated_image = label_annotator.annotate(scene=annotated_image, detections=detections, labels=labels)

    # Compile metadata
    counts = {}
    items_list = []
    confidences = detections.confidence if detections.confidence is not None else [1.0] * len(phrases)
    for phrase, confidence in zip(phrases, confidences):
        phrase_clean = phrase.strip().lower()
        if phrase_clean.endswith("."):
            phrase_clean = phrase_clean[:-1].strip()
        counts[phrase_clean] = counts.get(phrase_clean, 0) + 1
        items_list.append({
            "class": phrase_clean,
            "confidence": float(confidence)
        })
        
    detection_metadata = {
        "total_count": len(phrases),
        "counts": counts,
        "items": items_list
    }

    # Convert back to bytes
    success, encoded_image = cv2.imencode('.jpg', annotated_image)
    if success:
        return encoded_image.tobytes(), detection_metadata
    return image_bytes, empty_metadata

def process_and_upload_image(report_id: int, photo_url: str):
    """
    Background task to download image, process it, and upload the result.
    """
    from . import crud, database, schemas
    from .utils.file_upload import upload_to_cloudinary
    import requests
    from sqlalchemy.orm import Session

    print(f"Starting ML processing for report {report_id}")
    
    # Acquire processing lock to prevent duplicate runs
    with processing_lock:
        if report_id in processing_report_ids:
            print(f"Report {report_id} is already being processed. Skipping duplicate request.")
            return
        processing_report_ids.add(report_id)

    try:
        if not models_loaded_event.is_set():
            print(f"ML models are still loading. Waiting for model initialization...")
            loaded = models_loaded_event.wait(timeout=60.0)
            if not loaded:
                print(f"Timeout waiting for ML models to load for report {report_id}.")
                try:
                    db = database.SessionLocal()
                    update_data = schemas.ReportUpdate(ml_status="failed")
                    crud.update_report(db, report_id, update_data)
                    db.close()
                except Exception as db_err:
                    print(f"Failed to set status to failed: {db_err}")
                return

        if not gdino_model or not sam2_predictor:
            print(f"ML models unavailable. Skipping processing for report {report_id}.")
            try:
                db = database.SessionLocal()
                update_data = schemas.ReportUpdate(ml_status="failed")
                crud.update_report(db, report_id, update_data)
                db.close()
            except Exception as db_err:
                print(f"Failed to set status to failed: {db_err}")
            return

        # Download original image
        try:
            response = requests.get(photo_url)
            response.raise_for_status()
            original_bytes = response.content
        except Exception as e:
            print(f"Failed to download image for report {report_id}: {e}")
            try:
                db = database.SessionLocal()
                update_data = schemas.ReportUpdate(ml_status="failed")
                crud.update_report(db, report_id, update_data)
                db.close()
            except Exception as db_err:
                print(f"Failed to set status to failed: {db_err}")
            return

        try:
            # Process image
            annotated_bytes, detection_metadata = process_image_bytes(original_bytes)
            
            if annotated_bytes == original_bytes:
                print(f"No objects detected for report {report_id}.")
                db = database.SessionLocal()
                update_data = schemas.ReportUpdate(
                    ml_status="no_objects_found",
                    annotated_photo_url=None,
                    detection_metadata=detection_metadata
                )
                crud.update_report(db, report_id, update_data)
                db.close()
                return
                
            # Upload annotated image to Cloudinary
            import io
            
            class MockUploadFile:
                def __init__(self, filename, file_obj):
                    self.filename = filename
                    self.file = file_obj
                    self.content_type = "image/jpeg"
                    
            mock_file = MockUploadFile(filename=f"annotated_{report_id}.jpg", file_obj=io.BytesIO(annotated_bytes))
            
            annotated_photo_url = upload_to_cloudinary(mock_file, f"reports/annotated_{report_id}")
            
            # Update database
            db = database.SessionLocal()
            update_data = schemas.ReportUpdate(
                ml_status="success",
                annotated_photo_url=annotated_photo_url,
                detection_metadata=detection_metadata
            )
            crud.update_report(db, report_id, update_data)
            print(f"Successfully updated report {report_id} with annotated photo.")
            db.close()
        except Exception as e:
            print(f"Error during ML processing/upload for report {report_id}: {e}")
            try:
                db = database.SessionLocal()
                update_data = schemas.ReportUpdate(ml_status="failed")
                crud.update_report(db, report_id, update_data)
                db.close()
            except Exception as db_err:
                print(f"Failed to set status to failed: {db_err}")
    finally:
        with processing_lock:
            processing_report_ids.discard(report_id)

def run_resilient_queue_scheduler():
    """
    Background daemon scheduler to poll DB for pending/failed reports and process them.
    """
    import time
    from . import crud, database, schemas, models

    print("Resilient Background Queue Scheduler started.")

    while True:
        try:
            # Check every 30 seconds
            time.sleep(30)
            
            db = database.SessionLocal()
            try:
                # 1. Fetch pending reports
                with processing_lock:
                    active_ids = list(processing_report_ids)

                pending_reports = db.query(models.Report).filter(
                    models.Report.photo_url.isnot(None),
                    models.Report.ml_status == models.MLStatus.pending
                )
                if active_ids:
                    pending_reports = pending_reports.filter(models.Report.id.notin_(active_ids))
                pending_reports = pending_reports.all()

                # 2. Fetch failed reports with retry_count < 3
                failed_reports = db.query(models.Report).filter(
                    models.Report.photo_url.isnot(None),
                    models.Report.ml_status == models.MLStatus.failed,
                    models.Report.ml_retry_count < 3
                )
                if active_ids:
                    failed_reports = failed_reports.filter(models.Report.id.notin_(active_ids))
                failed_reports = failed_reports.all()

                candidates = pending_reports + failed_reports

                if candidates:
                    print(f"Queue Scheduler: Found {len(candidates)} candidate reports for ML processing.")

                for report in candidates:
                    print(f"Queue Scheduler: Queueing report {report.id} (status={report.ml_status}, retry_count={report.ml_retry_count})")
                    
                    # Update retry count if it was failed
                    if report.ml_status == models.MLStatus.failed:
                        report.ml_retry_count += 1
                        report.ml_status = models.MLStatus.pending
                        db.commit()

                    # Trigger task asynchronously in a separate thread so it doesn't block the scheduler loop
                    task_thread = threading.Thread(
                        target=process_and_upload_image,
                        args=(report.id, report.photo_url),
                        daemon=True
                    )
                    task_thread.start()

            except Exception as loop_err:
                print(f"Error in resilient queue scheduler loop iteration: {loop_err}")
            finally:
                db.close()
                
        except Exception as outer_err:
            print(f"Fatal error in resilient queue scheduler loop: {outer_err}")
            time.sleep(10)

