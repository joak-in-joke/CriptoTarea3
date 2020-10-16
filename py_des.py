import pyDes
from base64 import b64encode

# For Python3, you'll need to use bytes, i.e.:
#   data = b"Please encrypt my data"
#   k = pyDes.des(b"DESCRYPT", pyDes.CBC, b"\0\0\0\0\0\0\0\0", pad=None, padmode=pyDes.PAD_PKCS5)
# pyDes.des(key, [mode], [IV], [pad], [padmode])

data = b'Este texto esta cifrado o no?'
key = b'clavepip'
k = pyDes.des( key, pyDes.ECB, "\0\0\0\0\0\0\0\0", pad= None, padmode= pyDes.PAD_PKCS5 )
#crear variables modificables y crear ciclos
d = k.encrypt(data)

c_b64 = b64encode(d).decode('utf-8')

c_b64_text = '"'+c_b64+'"'

print (c_b64)
print (k.decrypt(d))

f = open('index.html','wb')

message = """<html>

    <head>
        <title>HTML base Tag</title>
    </head>

    <body>
        <p>Este sitio contiene un mensaje secreto</p>
        <div class="DES_ECB" id="""+c_b64_text+"""></div><!DOCTYPE html>
    </body>

</html>"""

f.write(message.encode('utf-8'))
f.close()