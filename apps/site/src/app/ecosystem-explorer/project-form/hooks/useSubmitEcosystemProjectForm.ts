import * as Sentry from '@sentry/nextjs'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { submitProject } from '../actions/submitProject'
import type { EcosystemProjectFormData } from '../types'
import { formatFile } from '../utils/formatFile'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function submit(data: EcosystemProjectFormData) {
    const { logo, ...formDataWithoutLogo } = data

    try {
      const formattedFile = await formatFile(logo)

      const pullRequest = await submitProject({
        formattedFile,
        formDataWithoutLogo,
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
