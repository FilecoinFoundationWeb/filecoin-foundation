import path from 'path'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import type { EcosystemProjectFormLogoData } from '../schema/EcosystemProjectFormSchema'

export type FormattedLogo = Awaited<ReturnType<typeof formatLogo>>

export async function formatLogo(logo: EcosystemProjectFormLogoData) {
  const base64 = await convertToBase64(logo)
  const format = getFileFormat(logo.name)

  return { base64, format, name: logo.name }
}

export async function buildTemporaryLogoFile(image: EcosystemProject['image']) {
  if (!image) {
    return
  }

  const dummyFileName = 'temporaryLogo'
  const response = await fetch(image.src)
  const blob = await response.blob()

  return new File([blob], dummyFileName, { type: blob.type })
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

const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'svg', 'webp'] as const

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
