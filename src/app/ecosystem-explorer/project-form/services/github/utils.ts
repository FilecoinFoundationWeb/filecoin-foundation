import { z } from 'zod'

import configJson from '@/data/cmsConfigSchema.json'

export const ALLOWED_IMAGE_FORMATS = [
  'png',
  'jpg',
  'jpeg',
  'svg',
  'webp',
] as const

export type AllowedImageFormats = (typeof ALLOWED_IMAGE_FORMATS)[number]

export function getTodayISO() {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

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
  const fileExtension = fileName.split('.').pop()

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

type GetMarkdownTemplateParams = {
  projectName: string
  imagePath: `${string}.${AllowedImageFormats}`
}

export function getMarkdownTemplate({
  projectName,
  imagePath,
}: GetMarkdownTemplateParams) {
  return `---
    title: ${projectName}
    image:
      src: ${imagePath}
  ---
`
}

const pathConfigSchema = z.object({
  media_folder: z.string(),
  public_folder: z.string(),
})

export function getFolderPaths() {
  const { media_folder, public_folder } = pathConfigSchema.parse(configJson)

  return {
    mediaFolder: media_folder,
    publicFolder: public_folder,
    ecosystemFolder: `src/content/ecosystem-explorer/projects`,
  } as const
}
