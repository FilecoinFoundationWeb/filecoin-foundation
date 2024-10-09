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

      const markdownTemplate = await buildMarkdownTemplate({
        formattedData,
        imagePath: `${assetsFolder}/${slug}.${formattedLogo.format}`,
        timestamps: {
          createdOn: nowTimestamp,
          updatedOn: nowTimestamp,
          publishedOn: nowTimestamp,
        },
      })

      const pullRequest = await submitProjectToGithub({
        slug,
        markdownTemplate,
        logo: {
          base64: formattedLogo.base64,
          path: `${publicAssetsFolder}/${slug}.${formattedLogo.format}`,
        },
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
    const imageHasChanged = formState.dirtyFields.files

    if (projectNameHasChanged) {
      return create(formData)
    }

    const { files, ...formDataWithoutFiles } = formData
    const slug = slugify(formData.projectName, { lower: true, strict: true })

    try {
      const { image, createdOn, publishedOn } = await getProjectData(slug)

      const { assetsFolder, publicAssetsFolder } = await getFolderPaths()

      const formattedLogo = await formatLogo(files)
      const formattedData = formatFormData(formDataWithoutFiles)

      const markdownTemplate = await buildMarkdownTemplate({
        formattedData,
        imagePath:
          image?.src || `${assetsFolder}/${slug}.${formattedLogo.format}`,
        timestamps: { updatedOn: new Date(), createdOn, publishedOn },
      })

      const pullRequest = await submitProjectToGithub({
        slug,
        markdownTemplate,
        logo: imageHasChanged && {
          base64: formattedLogo.base64,
          path: `${publicAssetsFolder}/${slug}.${formattedLogo.format}`,
        },
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
