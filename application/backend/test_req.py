import requests
import sys

URL = "http://localhost:8000"

print("Registering user...")
res = requests.post(f"{URL}/auth/register", json={
    "email": "test@test.com",
    "password": "password123",
    "display_name": "Test User",
    "phone": "1234567890",
    "role": "citizen"
})
print("Reg status:", res.status_code, res.text)

print("Logging in...")
res = requests.post(f"{URL}/auth/login", data={
    "username": "test@test.com",
    "password": "password123"
})
print("Login status:", res.status_code, res.text)
if res.status_code != 200:
    sys.exit(1)
token = res.json()["access_token"]

print("Posting report...")
files = {'photo': ('test.jpg', b'dummy content', 'image/jpeg')}
data = {
    'message_text': 'test',
    'latitude': '0',
    'longitude': '0',
    'tags': 'overflow,medium'
}
headers = {"Authorization": f"Bearer {token}"}
res = requests.post(f"{URL}/reports/", data=data, files=files, headers=headers)
print("Report post status:", res.status_code, res.text)
