import requests
import sys
from PIL import Image
import io

URL = "http://localhost:8000"

print("Registering user...")
res = requests.post(f"{URL}/auth/signup", json={
    "email": "test@test.com",
    "password": "password123",
    "display_name": "Test User",
    "phone_number": "1234567890",
    "role": "citizen"
})
print("Reg status:", res.status_code, res.text)
if res.status_code != 200 and "already registered" not in res.text.lower():
    print("Registration failed with unexpected error.")
    sys.exit(1)

print("Logging in...")
res = requests.post(f"{URL}/auth/login", json={
    "email": "test@test.com",
    "password": "password123"
})
print("Login status:", res.status_code, res.text)
if res.status_code != 200:
    sys.exit(1)
token = res.json()["access_token"]

print("Posting report...")
# Generate a valid tiny JPEG image dynamically using PIL
img = Image.new('RGB', (100, 100), color = 'green')
img_byte_arr = io.BytesIO()
img.save(img_byte_arr, format='JPEG')
valid_jpeg = img_byte_arr.getvalue()

files = {'photo': ('test.jpg', valid_jpeg, 'image/jpeg')}
data = {
    'message_text': 'Piles of cardboard boxes blocking the sidewalk',
    'latitude': '12.9716',
    'longitude': '77.5946',
    'tags': 'overflow,medium'
}
headers = {"Authorization": f"Bearer {token}"}
res = requests.post(f"{URL}/reports/", data=data, files=files, headers=headers)
print("Report post status:", res.status_code, res.text)
