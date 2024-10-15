'use client'

import * as Sentry from '@sentry/nextjs'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { submitProjectWithLogo } from '../actions/submitProjectWithLogo'
import type { EcosystemProjectFormData } from '../schema/EcosystemProjectFormSchema'
import { formatLogo } from '../utils/fileUtils'

export function useCreateEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function create(formData: EcosystemProjectFormData) {
    const { logo, ...formDataWithoutLogo } = formData
    const now = new Date()

    try {
      const formattedLogo = await formatLogo(logo)

      const pullRequest = await submitProjectWithLogo({
        formattedLogo,
        formDataWithoutLogo,
        prTitle: 'New Ecosystem Project',
        timestamps: { createdOn: now, updatedOn: now, publishedOn: now },
      })

      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('useCreateEcosystemProjectForm', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your information. Please try again or email us at info@fil.org",
      })
    }
  }
}
