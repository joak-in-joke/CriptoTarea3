from Crypto.Cipher import DES
from base64 import b64encode
from Crypto.Util.Padding import pad

key = b'clavepip'
text =  b'Holaaaaaaa'

cipher = DES.new(key, DES.MODE_ECB)
c_msg = msg = cipher.encrypt(pad(text, DES.block_size))

c_b64 = b64encode(c_msg).decode('utf-8')

print(c_msg)
print (c_b64)