'use client'

import * as Sentry from '@sentry/nextjs'
import slugify from 'slugify'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { buildMarkdownTemplate } from '../actions/buildMarkdownTemplate'
import { getFolderPaths } from '../actions/getFolderPaths'
import { submitProjectToGithub } from '../actions/submitProjectToGithub'
import type { EcosystemProjectFormData } from '../schema/EcosystemProjectFormSchema'
import { formatLogo } from '../utils/fileUtils'
import { formatFormData } from '../utils/formatFormData'

// Could be renamed as useCreateEcosystemProjectForm to be consistent
export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function create(formData: EcosystemProjectFormData) {
    const { files, ...formDataWithoutFiles } = formData
    const nowTimestamp = new Date()

    const slug = slugify(formData.projectName, { lower: true, strict: true })

    try {
      const formattedLogo = await formatLogo(files)
      const formattedData = formatFormData(formDataWithoutFiles)

      const { publicAssetsFolder, assetsFolder } = await getFolderPaths()

      const assetPath = `${assetsFolder}/${slug}.${formattedLogo.format}`
      const publicAssetPath = `${publicAssetsFolder}/${slug}.${formattedLogo.format}`

      const markdownTemplate = await buildMarkdownTemplate({
        formattedData,
        imagePath: assetPath,
        timestamps: {
          createdOn: nowTimestamp,
          updatedOn: nowTimestamp,
          publishedOn: nowTimestamp,
        },
      })

      const pullRequest = await submitProjectToGithub({
        slug,
        markdownTemplate,
        logo: { base64: formattedLogo.base64, path: publicAssetPath },
        prTitle: 'New Ecosystem Project',
      })

      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('useSubmitEcosystemProjectForm', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your information. Please try again or email us at info@fil.org",
      })
    }
  }
}
