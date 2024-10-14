'use server'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { encrypt } from '@/utils/encryption'

import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import type { FormattedFormData } from '../utils/formatFormData'

type Timestamps = {
  createdOn: Date
  updatedOn: Date
  publishedOn: Date
}

type MarkdownTemplateParams = {
  formattedData: FormattedFormData
  imagePath: NonNullable<EcosystemProject['image']>['src']
  timestamps: Timestamps
  tags?: EcosystemProject['tags']
}

export async function buildMarkdownTemplate({
  formattedData,
  imagePath,
  timestamps,
  tags,
}: MarkdownTemplateParams) {
  const { youtubeEmbedUrl, email, name, ...rest } = formattedData

  return buildEcosystemMarkdownTemplate({
    encryptedEmail: encrypt(email),
    encryptedName: encrypt(name),
    tags,
    youtubeUrl: youtubeEmbedUrl,
    imagePath,
    createdOn: timestamps.createdOn,
    updatedOn: timestamps.updatedOn,
    publishedOn: timestamps.publishedOn,
    ...rest,
  })
}
