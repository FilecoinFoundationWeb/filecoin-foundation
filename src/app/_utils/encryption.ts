import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.ENCRYPTION_SECRET_KEY

if (!SECRET_KEY) {
  throw new Error('ENCRYPTION_SECRET_KEY is not set')
}

export function encrypt(decryptedText: string) {
  const encrypted = CryptoJS.AES.encrypt(decryptedText, String(SECRET_KEY))
  return encrypted.toString()
}

export function decrypt(encryptedText: string) {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, String(SECRET_KEY))
  return decrypted.toString(CryptoJS.enc.Utf8)
}
