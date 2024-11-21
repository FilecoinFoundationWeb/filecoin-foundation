import * as Sentry from '@sentry/nextjs'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { createDateFromYear } from '@/utils/dateUtils'
import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { submitProjectToGithub } from '../services/github'
import {
  convertToBase64,
  getFileFormat,
} from '../services/github/utils/fileUtils'
import type { EcosystemProjectFormData } from '../types'
import { formatYoutubeUrl } from '../utils/formatYoutubeUrl'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function submit(data: EcosystemProjectFormData) {
    const logo = data.logo
    const yearJoined = Number(data.yearJoined.name)

    try {
      const pullRequest = await submitProjectToGithub({
        name: data.name,
        email: data.email,
        projectName: data.title,
        logo: {
          base64: await convertToBase64(logo),
          format: getFileFormat(logo.name),
        },
        category: data.category.id,
        subcategories: [data.subcategory.id],
        tech: keepTruthyKeysInArray(data.tech),
        shortDescription: data.briefSummary,
        longDescription: data.networkUseCase,
        yearJoinedISO: createDateFromYear(yearJoined).toISOString(),
        websiteUrl: data.websiteUrl,
        youtubeEmbedUrl:
          data.youtubeUrl && formatYoutubeUrl(data.youtubeUrl, { to: 'embed' }),
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
        message: `We couldn't submit your project. Please try again or email us at ${extractEmailAddress(FILECOIN_FOUNDATION_URLS.ecosystem.email.href)}`,
      })
    }
  }
}

function keepTruthyKeysInArray(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
