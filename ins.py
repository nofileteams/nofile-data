#Pls admin


import os
import subprocess
import zipfile
import shutil
import urllib.request
from send2trash import send2trash


os.makedirs(r"C:\Users\Public\Documents\nofile-client", exist_ok=True)


path = r"C:\Program Files\nofile-client"
if os.path.exists(path):
    send2trash(path)

u = "https://nofileteams.github.io/nofile-data/r47-tool.zip"
p = os.path.dirname(os.path.abspath(__file__))
f = os.path.join(p, "index.zip")
urllib.request.urlretrieve(u, f)


zip_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "index.zip")
extract_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "index")
new_name = os.path.join(os.path.dirname(os.path.abspath(__file__)), "nofile-client")

with zipfile.ZipFile(zip_path, 'r') as z:
    z.extractall(extract_dir)

os.rename(extract_dir, new_name)

shutil.move(new_name, r"C:\Program Files")



ps = r"""
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut([Environment]::GetFolderPath('Desktop') + '\start.lnk')
$Shortcut.TargetPath = 'C:\Program Files\nofile-client\start.exe'
$Shortcut.Save()
"""

subprocess.run(["powershell", "-Command", ps])


paths = [
    os.path.join(os.path.expanduser("~"), "Desktop", "start.lnk"),
    os.path.join(os.path.expanduser("~"), "OneDrive", "Desktop", "start.lnk")
]

src = next((p for p in paths if os.path.exists(p)), None)
dst = r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\start.lnk"

if src:
    shutil.move(src, dst)
else:
    raise FileNotFoundError


subprocess.call(r'C:\Program Files\nofile-client\start.exe', shell=True)
