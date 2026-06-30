import os
import cv2
from groundingdino.util.inference import load_model, load_image, predict, annotate

# 1. Define paths to your config and weights
CONFIG_PATH = "groundingdino/config/GroundingDINO_SwinT_OGC.py"
WEIGHTS_PATH = "weights/groundingdino_swint_ogc.pth"

# 2. Load the model
print("Loading model...")
model = load_model(CONFIG_PATH, WEIGHTS_PATH)

# 3. Setup your inputs
IMAGE_PATH = r"D:\OpenSource Waste Management\gDinoSam\input\test_image.png" # <--- Replace with the path to an image on your computer
TEXT_PROMPT = "plastic bottle . plastic bag . plastic container . plastic cup . plastic wrapper . styrofoam . cardboard box . paper cup . crumpled paper . newspaper . magazine . milk carton . glass bottle . glass jar . broken glass . metal can . aluminum foil . soda can . aerosol can . scrap metal . food waste . banana peel . apple core . egg shell . leaves . battery . electronic waste . cable . mobile phone . laptop . clothing . fabric . rubber tire . cigarette butt . trash . garbage . trash bag . debris ." # <--- What you want to detect (separate with dots)
BOX_THRESHOLD = 0.35
TEXT_THRESHOLD = 0.25

if not os.path.exists(IMAGE_PATH):
    print(f"Error: Please place an image named '{IMAGE_PATH}' in the folder or change the IMAGE_PATH variable.")
    exit()

# 4. Load the image
print("Loading image...")
image_source, image = load_image(IMAGE_PATH)

# 5. Run prediction
print(f"Searching for: '{TEXT_PROMPT}'")
boxes, logits, phrases = predict(
    model=model,
    image=image,
    caption=TEXT_PROMPT,
    box_threshold=BOX_THRESHOLD,
    text_threshold=TEXT_THRESHOLD
)

# 6. Draw the boxes and labels on the image
print("Drawing bounding boxes...")
annotated_frame = annotate(image_source=image_source, boxes=boxes, logits=logits, phrases=phrases)

# 7. Save the output
OUTPUT_PATH = r"D:\OpenSource Waste Management\gDinoSam\output\annotated_image.jpg"
cv2.imwrite(OUTPUT_PATH, annotated_frame)
print(f"Done! Saved result to {OUTPUT_PATH}")