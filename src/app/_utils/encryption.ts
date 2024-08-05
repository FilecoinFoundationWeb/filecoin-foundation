import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.ENCRYPTION_SECRET_KEY

if (!SECRET_KEY) {
  throw new Error('ENCRYPTION_SECRET_KEY is not set')
}

export const PREFIX = 'encrypted::'

export function encrypt(decryptedText: string) {
  const encrypted = CryptoJS.AES.encrypt(decryptedText, String(SECRET_KEY))
  return `${PREFIX}${encrypted.toString()}`
}

export function decrypt(encryptedText: string) {
  if (!encryptedText.startsWith(PREFIX)) {
    throw new Error('Invalid encrypted text')
  }

  const encryptedData = encryptedText.slice(PREFIX.length)
  const decrypted = CryptoJS.AES.decrypt(encryptedData, String(SECRET_KEY))
  return decrypted.toString(CryptoJS.enc.Utf8)
}
