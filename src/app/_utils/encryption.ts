import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.ENCRYPTION_SECRET_KEY

if (!SECRET_KEY) {
  throw new Error('ENCRYPTION_SECRET_KEY is not set')
}

export const PREFIX = 'encrypted::'

export function encrypt(text: string) {
  try {
    const encryptedParams = CryptoJS.AES.encrypt(text, String(SECRET_KEY))
    const encryptedString = encryptedParams.toString()

    return `${PREFIX}${encryptedString}`
  } catch (error) {
    throw new Error(`Could not encrypt: ${error}`)
  }
}

export function decrypt(encryptedText: string) {
  if (!encryptedText.startsWith(PREFIX)) {
    throw new Error('Missing encrypted prefix')
  }

  try {
    const decryptedParams = CryptoJS.AES.decrypt(
      encryptedText.slice(PREFIX.length),
      String(SECRET_KEY),
    )

    return decryptedParams.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    throw new Error(`Could not decrypt: ${error}`)
  }
}
