import path from 'path'

import { findOrThrow } from '@/utils/findOrThrow'

import { ALLOWED_IMAGE_FORMATS } from '../constants'

export async function formatFile(file: File) {
  const base64 = await convertToBase64(file)
  const format = getFileFormat(file.name)

  return { base64, format, name: file.name }
}

function convertToBase64(file: File): Promise<string> {
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

function getFileFormat(fileName: string) {
  const extensionWithDot = path.extname(fileName)

  const validFileExtension = findOrThrow(
    ALLOWED_IMAGE_FORMATS,
    (format) => format === extensionWithDot,
  )

  return validFileExtension.slice(1)
}
