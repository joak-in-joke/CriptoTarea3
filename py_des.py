import pyDes
from base64 import b64encode

data = b'Este texto esta cifrado o no?'
key = b'clavepip'
mod = pyDes.ECB
iv = "\0\0\0\0\0\0\0\0"
pad = None
padmode = pyDes.PAD_PKCS5
rounds =1
k = pyDes.des( key, mod , iv, pad,  padmode)

ec_data = k.encrypt(data)

i = 1
while(i < rounds):
    
    ec_data = k.encrypt(ec_data)
    i = i + 1

c_b64 = b64encode(ec_data).decode('utf-8')

c_b64_text = '"'+c_b64+'"'

print (c_b64)
print (k.decrypt(ec_data))

f = open('index.html','wb')

message = """<html>

    <head>
        <title>HTML base Tag</title>
    </head>

    <body>
        <p>Este sitio contiene un mensaje secreto</p>
        <div class="DES" id="""+c_b64_text+"""></div><!DOCTYPE html>
        <div class="mode" id="""+str(mod)+"""></div><!DOCTYPE html>
        <div class="iv" id="""+str(iv)+"""></div><!DOCTYPE html>
        <div class="pad" id="""+str(pad)+"""></div><!DOCTYPE html>
        <div class="padmode" id="""+str(padmode)+"""></div><!DOCTYPE html>
        <div class="rounds" id="""+str(rounds)+"""></div><!DOCTYPE html>
    </body>

</html>"""

f.write(message.encode('utf-8'))
f.close()