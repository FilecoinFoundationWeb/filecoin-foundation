'use client'

import * as Sentry from '@sentry/nextjs'
import slugify from 'slugify'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { getProjectData } from '../actions/getProjectData'
import { submitProjectWithLogo } from '../actions/submitProjectWithLogo'
import { submitProjectWithoutNewLogo } from '../actions/submitProjectWithoutNewLogo'
import type { EcosystemProjectFormData } from '../schema/EcosystemProjectFormSchema'
import type { SubmitOption } from '../types'
import { formatLogo } from '../utils/fileUtils'

export function useUpdateEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function update(
    formData: EcosystemProjectFormData,
    option: SubmitOption,
  ) {
    const { logo, ...formDataWithoutLogo } = formData
    const { logoIsUpdated } = option

    const nowTimestamp = new Date()
    const slug = slugify(formData.projectName, { lower: true, strict: true })

    try {
      const existingProjectData = await getProjectData(slug)

      const timestamps = {
        createdOn: existingProjectData.createdOn,
        updatedOn: nowTimestamp,
        publishedOn: existingProjectData.publishedOn || nowTimestamp,
      }

      if (!logoIsUpdated && existingProjectData.image) {
        const pullRequest = await submitProjectWithoutNewLogo({
          formDataWithoutLogo,
          existingProjectData,
          image: existingProjectData.image,
          timestamps,
          prTitle: 'Ecosystem Project Update',
        })

        updateSearchParams({ status: 'success', prNumber: pullRequest.number })
        return
      }

      const formattedLogo = await formatLogo(logo)

      const pullRequest = await submitProjectWithLogo({
        formattedLogo,
        formDataWithoutLogo,
        prTitle: 'Ecosystem Project Update',
        timestamps,
      })

      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('useUpdateEcosystemProjectForm', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your information. Please try again or email us at info@fil.org",
      })
    }
  }
}
