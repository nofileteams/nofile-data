import os
from send2trash import send2trash

path = r"C:\Program Files\nofile-client"
if os.path.exists(path):
    send2trash(path)