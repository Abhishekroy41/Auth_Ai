import shutil
import os

src = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\8731811f-289e-45a7-8c4d-037458d0a513\cctv_poster_1782271891014.png"
dst = r"c:\Users\ASUS\Desktop\authai-website\public\cctv_poster.png"

try:
    shutil.copy2(src, dst)
    print("Copied successfully.")
except Exception as e:
    print(f"Error copying: {e}")
