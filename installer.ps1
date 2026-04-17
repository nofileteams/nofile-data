$u="https://nofileteams-coder.github.io/nofile-data/r47-tool.zip"
$p=Split-Path $MyInvocation.MyCommand.Path
$f=Join-Path $p "index.zip"
Invoke-WebRequest -Uri $u -OutFile $f

Expand-Archive -Path ".\index.zip" -DestinationPath ".\index" -Force
Rename-Item -Path "index\" -NewName "nofile-client"

Move-Item -Path ".\nofile-client" -Destination "C:\Program Files"


$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut([Environment]::GetFolderPath('Desktop') + '\start.lnk')
$Shortcut.TargetPath = 'C:\Program Files\nofile-client\start.exe'
$Shortcut.Save()