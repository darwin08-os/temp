import socket

host = input("enter : ")
port = 45200

server = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
server.connect((host,port))

while True:
        command = input("")
        if command.lower() == "exit":
                server.sendall(command.encode())
                break
        if len(command)>0:
                server.sendall(command.encode())
                output = server.recv(8192).decode()
                print(output,end="")
server.close()
