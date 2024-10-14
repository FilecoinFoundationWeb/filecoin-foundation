'use client'

import * as Sentry from '@sentry/nextjs'
import slugify from 'slugify'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { buildMarkdownTemplate } from '../actions/buildMarkdownTemplate'
import { getFolderPaths } from '../actions/getFolderPaths'
import { getProjectData } from '../actions/getProjectData'
import { submitProjectToGithub } from '../actions/submitProjectToGithub'
import type { EcosystemProjectFormData } from '../schema/EcosystemProjectFormSchema'
import { formatLogo } from '../utils/fileUtils'
import { formatFormData } from '../utils/formatFormData'

export function useUpdateEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function update(formData: EcosystemProjectFormData) {
    const { files, ...formDataWithoutFiles } = formData
    const nowTimestamp = new Date()

    const slug = slugify(formData.projectName, { lower: true, strict: true })

    try {
      const { image, createdOn, publishedOn, tags } = await getProjectData(slug)
      const formattedLogo = await formatLogo(files)
      const formattedData = formatFormData(formDataWithoutFiles)

      const logoIsTheSame = formattedLogo.name === image?.src

      if (logoIsTheSame) {
        const markdownTemplate = await buildMarkdownTemplate({
          formattedData,
          imagePath: image.src,
          tags,
          timestamps: {
            createdOn,
            updatedOn: nowTimestamp,
            publishedOn: publishedOn || nowTimestamp,
          },
        })

        const pullRequest = await submitProjectToGithub({
          slug,
          markdownTemplate,
          prTitle: 'Ecosystem Project Update',
        })

        return updateSearchParams({
          status: 'success',
          prNumber: pullRequest.number,
        })
      }

      // Tnis is duplicated from the create function
      const { assetsFolder, publicAssetsFolder } = await getFolderPaths()
      const assetPath = `${assetsFolder}/${slug}.${formattedLogo.format}`
      const publicAssetPath = `${publicAssetsFolder}/${slug}.${formattedLogo.format}`

      const markdownTemplate = await buildMarkdownTemplate({
        formattedData,
        imagePath: assetPath,
        tags,
        timestamps: {
          updatedOn: nowTimestamp,
          createdOn,
          publishedOn: publishedOn || nowTimestamp,
        },
      })

      const pullRequest = await submitProjectToGithub({
        slug,
        markdownTemplate,
        logo: { base64: formattedLogo.base64, path: publicAssetPath },
        prTitle: 'Ecosystem Project Update',
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
