import * as Sentry from '@sentry/nextjs'

import { createDateFromYear } from '@/utils/dateUtils'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { submitProjectToGithub } from '../actions/submitProjectToGithub'
import type { EcosystemProjectFormData } from '../schema/form'
import {
  convertToBase64,
  getFileFormat,
} from '../services/github/utils/fileUtils'
import { formatYoutubeEmbedUrl } from '../utils/formatYoutubeUrl'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function submit(data: EcosystemProjectFormData) {
    const logo = data.files[0]
    const yearJoined = Number(data.yearJoined.name)

    try {
      const pullRequest = await submitProjectToGithub({
        name: data.name,
        email: data.email,
        projectName: data.projectName,
        logo: {
          base64: await convertToBase64(logo),
          format: getFileFormat(logo.name),
        },
        category: data.category.id,
        subcategories: [data.topic.id],
        tech: keepTruthyKeysInArray(data.tech),
        shortDescription: data.briefSummary,
        longDescription: data.networkUseCase,
        yearJoinedISO: createDateFromYear(yearJoined).toISOString(),
        websiteUrl: data.websiteUrl,
        youtubeEmbedUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
        githubUrl: data.githubUrl,
        xUrl: data.xUrl,
        timestampISO: new Date().toISOString(),
      })
      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('Error in submitProjectToGithub:', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your project. Please try again or email us at info@fil.org",
      })
    }
  }
}

function keepTruthyKeysInArray(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
