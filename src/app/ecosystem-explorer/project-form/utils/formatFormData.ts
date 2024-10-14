import { createDateFromYear } from '@/utils/dateUtils'

import type { EcosystemProjectFormDataWithoutFiles } from '../schema/EcosystemProjectFormSchema'

import { formatYoutubeEmbedUrl } from './formatYoutubeUrl'

export type FormattedFormData = ReturnType<typeof formatFormData>

export function formatFormData(data: EcosystemProjectFormDataWithoutFiles) {
  const yearJoined = Number(data.yearJoined.name)

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    projectName: data.projectName.trim(),
    category: data.category.id,
    subcategories: [data.topic.id],
    tech: buildArrayFromTruthyKeys(data.tech),
    shortDescription: data.briefSummary.trim(),
    longDescription: data.networkUseCase.trim(),
    yearJoined: createDateFromYear(yearJoined),
    websiteUrl: data.websiteUrl.trim(),
    youtubeEmbedUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
    githubUrl: data.githubUrl?.trim(),
    xUrl: data.xUrl?.trim(),
  }
}

function buildArrayFromTruthyKeys(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
