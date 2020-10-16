from Crypto.Cipher import DES
key = b'-8B key-'
print(key)
cipher = DES.new(key, DES.MODE_ECB)
plaintext = b'sona si latine loqueris '
msg = cipher.encrypt(plaintext)
print(msg)

print(cipher.decrypt(msg, key))
