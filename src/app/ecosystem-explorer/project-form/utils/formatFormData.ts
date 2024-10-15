import { createDateFromYear } from '@/utils/dateUtils'
import { encrypt } from '@/utils/encryption'

import type { EcosystemProjectFormDataWithoutLogo } from '../schema/EcosystemProjectFormSchema'

import { formatYoutubeEmbedUrl } from './formatYoutubeUrl'

export type FormattedFormData = ReturnType<typeof formatFormData>

export function formatFormData(data: EcosystemProjectFormDataWithoutLogo) {
  const yearJoined = Number(data.yearJoined.name)

  return {
    fullName: encrypt(data.name.trim()),
    email: encrypt(data.email.trim()),
    title: data.projectName.trim(),
    category: data.category.id,
    subcategories: [data.topic.id],
    tech: buildArrayFromTruthyKeys(data.tech),
    description: data.briefSummary.trim(),
    content: data.networkUseCase.trim(),
    yearJoined: createDateFromYear(yearJoined),
    website: data.websiteUrl.trim(),
    videoUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
    repo: data.githubUrl?.trim(),
    twitter: data.xUrl?.trim(),
  }
}

function buildArrayFromTruthyKeys(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
