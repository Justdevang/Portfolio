import shutil
import os

home = os.path.expanduser('~')
brain_dir = os.path.join(home, '.gemini', 'antigravity-ide', 'brain', '0338719c-da66-424c-8729-9253aea30612')

files = {
    "morivana_daily_mockup_1784682819704.png": "public/images/morivana-hover-image.png",
    "gyro_ninja_mockup_1784682834610.png": "public/images/gyro-ninja-hover-image.png",
    "desktop_pet_mockup_1784682851550.png": "public/images/desktop-pet-hover-image.png"
}

for src_name, dest in files.items():
    src = os.path.join(brain_dir, src_name)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if os.path.exists(src):
        shutil.copy(src, dest)
        print(f"Copied {src_name} to {dest}")
    else:
        print(f"Source file not found: {src}")
