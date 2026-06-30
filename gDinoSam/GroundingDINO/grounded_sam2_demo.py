import os
import cv2
import torch
import numpy as np
import supervision as sv

# GroundingDINO
from groundingdino.util.inference import Model as GroundingDINOModel

# SAM 2
from sam2.build_sam import build_sam2
from sam2.sam2_image_predictor import SAM2ImagePredictor

# 1. Configuration
IMAGE_PATH = r"D:\OpenSource Waste Management\gDinoSam\input\test_image.png"
TEXT_PROMPT = "plastic bottle . plastic bag . plastic container . plastic cup . plastic wrapper . styrofoam . cardboard box . paper cup . crumpled paper . newspaper . magazine . milk carton . glass bottle . glass jar . broken glass . metal can . aluminum foil . soda can . aerosol can . scrap metal . food waste . banana peel . apple core . egg shell . leaves . battery . electronic waste . cable . mobile phone . laptop . clothing . fabric . rubber tire . cigarette butt . trash . garbage . trash bag . debris ."
BOX_THRESHOLD = 0.35
TEXT_THRESHOLD = 0.25

GDINO_CONFIG_PATH = "groundingdino/config/GroundingDINO_SwinT_OGC.py"
GDINO_WEIGHTS_PATH = "weights/groundingdino_swint_ogc.pth"

# SAM 2.1 configs are usually available by just filename in the package
SAM2_CONFIG = "configs/sam2.1/sam2.1_hiera_l.yaml"
SAM2_WEIGHTS_PATH = "weights/sam2.1_hiera_large.pt"

if not os.path.exists(IMAGE_PATH):
    print(f"Error: Could not find image '{IMAGE_PATH}'")
    exit()

# Load GroundingDINO
print("Loading GroundingDINO...")
gdino_model = GroundingDINOModel(
    model_config_path=GDINO_CONFIG_PATH,
    model_checkpoint_path=GDINO_WEIGHTS_PATH
)

# Load SAM-2
print("Loading SAM-2...")
device = "cuda" if torch.cuda.is_available() else "cpu"
sam2_model = build_sam2(SAM2_CONFIG, SAM2_WEIGHTS_PATH, device=device)
sam2_predictor = SAM2ImagePredictor(sam2_model)

# Read Image
image = cv2.imread(IMAGE_PATH)

# Run GroundingDINO
print(f"Detecting objects matching: '{TEXT_PROMPT}'...")
detections, phrases = gdino_model.predict_with_caption(
    image=image,
    caption=TEXT_PROMPT,
    box_threshold=BOX_THRESHOLD,
    text_threshold=TEXT_THRESHOLD
)

if len(detections.xyxy) == 0:
    print("No objects detected!")
    exit()

print(f"Detected {len(detections.xyxy)} objects. Generating masks with SAM-2...")

# Run SAM-2
sam2_predictor.set_image(image)

# SAM-2 accepts boxes in (N, 4) format where each box is [x_min, y_min, x_max, y_max]
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

OUTPUT_PATH = r"D:\OpenSource Waste Management\gDinoSam\output\grounded_sam2_result.jpg"
cv2.imwrite(OUTPUT_PATH, annotated_image)
print(f"Done! Saved result to {OUTPUT_PATH}")
