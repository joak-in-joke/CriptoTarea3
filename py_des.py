import pyDes
from base64 import b64encode

# For Python3, you'll need to use bytes, i.e.:
#   data = b"Please encrypt my data"
#   k = pyDes.des(b"DESCRYPT", pyDes.CBC, b"\0\0\0\0\0\0\0\0", pad=None, padmode=pyDes.PAD_PKCS5)
# pyDes.des(key, [mode], [IV], [pad], [padmode])

data = b'Please a'
k = pyDes.des(b'DESCRYPT', pyDes.ECB, "\0\0\0\0\0\0\0\0", pad= None, padmode= pyDes.PAD_NORMAL)
d = k.encrypt(data)

c_b64 = b64encode(d).decode('utf-8')

print (c_b64)
print (k.decrypt(d))
#assert k.decrypt(d) == data
