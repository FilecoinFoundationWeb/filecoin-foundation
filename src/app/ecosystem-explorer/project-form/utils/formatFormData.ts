import { createDateFromYear } from '@/utils/dateUtils'
import { encrypt } from '@/utils/encryption'

import type { EcosystemProjectFormDataWithoutLogo } from '../types'

import { formatYoutubeUrl } from './formatYoutubeUrl'

export type FormattedFormData = ReturnType<typeof formatFormData>

export function formatFormData(data: EcosystemProjectFormDataWithoutLogo) {
  const yearJoined = Number(data.yearJoined.name)
  const now = new Date()

  return {
    fullName: encrypt(data.name.trim()),
    email: encrypt(data.email.trim()),
    title: data.title,
    category: data.category.id,
    tech: buildArrayFromTruthyKeys(data.tech),
    description: data.briefSummary,
    content: data.networkUseCase,
    yearJoined: createDateFromYear(yearJoined),
    website: data.websiteUrl,
    videoUrl:
      data.youtubeUrl && formatYoutubeUrl(data.youtubeUrl, { to: 'embed' }),
    repo: data.githubUrl,
    twitter: data.xUrl,
    createdOn: now,
    updatedOn: now,
    publishedOn: now,
  }
}

function buildArrayFromTruthyKeys(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
