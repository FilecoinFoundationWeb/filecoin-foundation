import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { type EcosystemProjectFormData } from '../components/EcosystemProjectForm'
import { YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL } from '../constants'
import { submitProjectToGithub } from '../services/github'
import {
  convertToBase64,
  getFileFormat,
} from '../services/github/utils/fileUtils'

export function useSubmitEcosystemProjectForm() {
  const { updateSearchParams } = useUpdateSearchParams()

  return async function submit(data: EcosystemProjectFormData) {
    try {
      const logo = data.files[0]

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
        yearJoined: data.yearJoined.name,
        websiteUrl: data.websiteUrl,
        youtubeUrl: formatYoutubeEmbedUrl(data.youtubeUrl),
        githubUrl: data.githubUrl,
        xHandle: data.xHandle,
        timestampISO: new Date().toISOString(),
      })
      updateSearchParams({ status: 'success', prNumber: pullRequest.number })
    } catch (error) {
      updateSearchParams({ status: 'error', message: String(error) })
    }
  }
}

function keepTruthyKeysInArray(object: Record<string, boolean>) {
  return Object.entries(object)
    .filter(([, value]) => value)
    .map(([key]) => key)
}

function formatYoutubeEmbedUrl(url?: string) {
  return url?.replace(YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL)
}
