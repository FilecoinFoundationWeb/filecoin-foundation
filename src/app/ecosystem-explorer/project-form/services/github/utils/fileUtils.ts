import path from 'path'

export const ALLOWED_IMAGE_FORMATS = [
  'png',
  'jpg',
  'jpeg',
  'svg',
  'webp',
] as const

export type AllowedImageFormats = (typeof ALLOWED_IMAGE_FORMATS)[number]

export function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const rawResult = String(reader.result)
      const [, cleanBase64String] = rawResult.split('base64,')
      resolve(cleanBase64String)
    }
    reader.onerror = (error) => reject(error)
  })
}

export function getFileFormat(fileName: string) {
  const fileExtension = path.extname(fileName).slice(1)

  if (!fileExtension) {
    throw new Error('File extension not found')
  }

  const validFileExtension = ALLOWED_IMAGE_FORMATS.find(
    (format) => format === fileExtension,
  )

  if (!validFileExtension) {
    throw new Error('Invalid file extension')
  }

  return validFileExtension
}
