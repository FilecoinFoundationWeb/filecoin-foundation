'use client'

import * as Sentry from '@sentry/nextjs'
import type { FormState } from 'react-hook-form'
import slugify from 'slugify'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { buildMarkdownTemplate } from '../actions/buildMarkdownTemplate'
import { getFolderPaths } from '../actions/getFolderPaths'
import { getProjectData } from '../actions/getProjectData'
import { submitProjectToGithub } from '../actions/submitProjectToGithub'
import type { EcosystemProjectFormData } from '../schema/form'
import { formatLogo } from '../utils/fileUtils'
import { formatFormData } from '../utils/formatFormData'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return { create, update }

  async function create(formData: EcosystemProjectFormData) {
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
      })

      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('useSubmitEcosystemProjectForm - create', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your information. Please try again or email us at info@fil.org",
      })
    }
  }

  async function update(
    formData: EcosystemProjectFormData,
    formState: FormState<EcosystemProjectFormData>,
  ) {
    const projectNameHasChanged = formState.dirtyFields.projectName

    if (projectNameHasChanged) {
      return create(formData)
    }

    const { files, ...formDataWithoutFiles } = formData
    const nowTimestamp = new Date()

    const slug = slugify(formData.projectName, { lower: true, strict: true })

    try {
      const { image, createdOn, publishedOn, tags } = await getProjectData(slug)
      const { assetsFolder, publicAssetsFolder } = await getFolderPaths()

      const formattedLogo = await formatLogo(files)
      const formattedData = formatFormData(formDataWithoutFiles)

      const logoHasChanged = formattedLogo.name !== image?.src
      const useDefaultAssetPath = logoHasChanged || !image

      const assetPath = `${assetsFolder}/${slug}.${formattedLogo.format}`
      const publicAssetPath = `${publicAssetsFolder}/${slug}.${formattedLogo.format}`

      const markdownTemplate = await buildMarkdownTemplate({
        formattedData,
        imagePath: useDefaultAssetPath ? assetPath : image.src,
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
        logo: logoHasChanged
          ? { base64: formattedLogo.base64, path: publicAssetPath }
          : undefined,
      })

      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      console.error('useSubmitEcosystemProjectForm - update', error)
      Sentry.captureException(error)
      updateSearchParams({
        status: 'error',
        message:
          "We couldn't submit your information. Please try again or email us at info@fil.org",
      })
    }
  }
}
