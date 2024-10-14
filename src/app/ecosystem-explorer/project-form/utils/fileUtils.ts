import path from 'path'

import type { EcosystemProjectFormFiles } from '../schema/EcosystemProjectFormSchema'

export type AllowedImageFormats = (typeof ALLOWED_IMAGE_FORMATS)[number]

export type FormattedLogo = Awaited<ReturnType<typeof formatLogo>>

export async function formatLogo(files: EcosystemProjectFormFiles) {
  const logo = files[0]

  if (!logo) {
    throw new Error('No logo found')
  }

  const base64 = await convertToBase64(logo)
  const format = getFileFormat(logo.name)

  return { base64, format, name: logo.name }
}

export async function getFileFromPath(path?: string) {
  if (!path) {
    return
  }

  const response = await fetch(path)
  const blob = await response.blob()
  return new File([blob], path, { type: blob.type })
}

export const ALLOWED_IMAGE_FORMATS = [
  'png',
  'jpg',
  'jpeg',
  'svg',
  'webp',
] as const

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
