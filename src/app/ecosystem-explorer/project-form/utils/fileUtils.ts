import path from 'path'

import { findOrThrow } from '@/utils/findOrThrow'

import type { EcosystemProject } from '../../types/ecosystemProjectType'
import { ALLOWED_IMAGE_FORMATS } from '../constants'
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

function getFileFormat(fileName: string) {
  const extensionWithDot = path.extname(fileName)

  const validFileExtension = findOrThrow(
    ALLOWED_IMAGE_FORMATS,
    (format) => format === extensionWithDot,
  )

  return validFileExtension.slice(1)
}
