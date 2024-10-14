'use server'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { encrypt } from '@/utils/encryption'

import type { FormattedFormData } from '../utils/formatFormData'
import { getEcosystemMarkdownTemplate } from '../utils/getEcosystemMarkdownTemplate'

type Timestamps = {
  createdOn: Date
  updatedOn: Date
  publishedOn: Date
}

type MarkdownTemplateParams = {
  formattedData: FormattedFormData
  imagePath: string
  timestamps: Timestamps
  tags?: EcosystemProject['tags']
}

export async function buildMarkdownTemplate({
  formattedData,
  imagePath,
  timestamps,
  tags,
}: MarkdownTemplateParams) {
  return getEcosystemMarkdownTemplate({
    encryptedEmail: encrypt(formattedData.email),
    encryptedName: encrypt(formattedData.name),
    projectName: formattedData.projectName,
    imagePath,
    category: formattedData.category,
    subcategories: formattedData.subcategories,
    tech: formattedData.tech,
    shortDescription: formattedData.shortDescription,
    longDescription: formattedData.longDescription,
    yearJoined: formattedData.yearJoinedISO,
    websiteUrl: formattedData.websiteUrl,
    youtubeUrl: formattedData.youtubeEmbedUrl,
    githubUrl: formattedData.githubUrl,
    xUrl: formattedData.xUrl,
    createdOn: timestamps.createdOn.toISOString(),
    updatedOn: timestamps.updatedOn.toISOString(),
    publishedOn: timestamps.publishedOn.toISOString(),
    tags,
  })
}
