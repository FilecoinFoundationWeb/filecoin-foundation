'use client'

import * as Sentry from '@sentry/nextjs'
import type { FormState } from 'react-hook-form'

import { createDateFromYear } from '@/utils/dateUtils'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { submitProjectToGithub } from '../actions/submitProjectToGithub'
import { updateProjectOnGitHub } from '../actions/updateProjectOnGitHub'
import { EMPTY_PLACEHOLDER_FILE_NAME } from '../constants'
import type { EcosystemProjectFormData } from '../schema/form'
import {
  convertToBase64,
  getFileFormat,
} from '../services/github/utils/fileUtils'
import { formatYoutubeEmbedUrl } from '../utils/formatYoutubeUrl'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  async function createProject(data: EcosystemProjectFormData) {
    const logo = data.files[0]
    const yearJoined = Number(data.yearJoined.name)

    try {
      const pullRequest = await submitProjectToGithub({
        data: {
          name: data.name,
          email: data.email,
          projectName: data.projectName,
          category: data.category.id,
          subcategories: [data.topic.id],
          tech: buildArrayFromTruthyKeys(data.tech),
          shortDescription: data.briefSummary,
          longDescription: data.networkUseCase,
          yearJoinedISO: createDateFromYear(yearJoined).toISOString(),
          websiteUrl: data.websiteUrl,
          youtubeEmbedUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
          githubUrl: data.githubUrl,
          xUrl: data.xUrl,
          timestampISO: new Date().toISOString(),
        },
        logo: {
          base64: await convertToBase64(logo),
          format: getFileFormat(logo.name),
        },
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

  async function updateProject(
    data: EcosystemProjectFormData,
    formState: FormState<EcosystemProjectFormData>,
  ) {
    const logo = data.files[0]
    const yearJoined = Number(data.yearJoined.name)

    try {
      const pullRequest = await updateProjectOnGitHub({
        data: {
          name: data.name,
          email: data.email,
          projectName: data.projectName,
          category: data.category.id,
          subcategories: [data.topic.id],
          tech: buildArrayFromTruthyKeys(data.tech),
          shortDescription: data.briefSummary,
          longDescription: data.networkUseCase,
          yearJoinedISO: createDateFromYear(yearJoined).toISOString(),
          websiteUrl: data.websiteUrl,
          youtubeEmbedUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
          githubUrl: data.githubUrl,
          xUrl: data.xUrl,
          timestampISO: new Date().toISOString(),
        },
        logo: {
          base64: await convertToBase64(logo),
          format: getFileFormat(logo.name),
        },
        options: {
          projectTitleHasChanged: Boolean(formState.dirtyFields.projectName),
          logoHasChanged: logo.name !== EMPTY_PLACEHOLDER_FILE_NAME,
        },
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

  return { createProject, updateProject }
}

function buildArrayFromTruthyKeys(object: Record<string, boolean>) {
  const entries = Object.entries(object)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))
  return truthyValueEntries.map(([key]) => key)
}
