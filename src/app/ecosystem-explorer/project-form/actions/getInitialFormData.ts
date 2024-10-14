'use server'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import type { EcosystemProjectFormDataWithoutFiles } from '../schema/EcosystemProjectFormSchema'
import { formatYoutubeUrl } from '../utils/formatYoutubeUrl'
import { getOptionsFromObject } from '../utils/getOptionsFromObject'

import { getCategoryData } from './getCategoryData'

const emptyOption = { id: '', name: '' }

export async function getInitialFormData(
  data?: EcosystemProject,
): Promise<EcosystemProjectFormDataWithoutFiles> {
  const isCreateStep = !data

  if (isCreateStep) {
    return {
      name: '',
      email: '',
      projectName: '',
      tech: { filecoin: false, ipfs: false },
      yearJoined: emptyOption,
      briefSummary: '',
      networkUseCase: '',
      category: emptyOption,
      topic: emptyOption,
      websiteUrl: '',
    }
  }

  const { categoryData, subCategoryData } = await getCategoryData()

  const categoryOptions = getOptionsFromObject(categoryData)
  const topicOptions = getOptionsFromObject(subCategoryData)

  const tech = {
    filecoin: Boolean(data.tech.find((tech) => tech === 'filecoin')),
    ipfs: Boolean(data.tech.find((tech) => tech === 'ipfs')),
  }

  const yearJoined = data.yearJoined
    ? {
        id: data.yearJoined.getFullYear().toString(),
        name: data.yearJoined.getFullYear().toString(),
      }
    : emptyOption

  const category =
    categoryOptions.find(
      (categoryOptions) => categoryOptions.id === data.category,
    ) || emptyOption

  const topic =
    topicOptions.find(
      (topicOptions) => topicOptions.id === data.subcategories?.[0],
    ) || emptyOption

  return {
    name: '',
    email: '',
    projectName: data.title,
    tech,
    yearJoined,
    briefSummary: data.description,
    networkUseCase: data.content?.trim() || '',
    category,
    topic,
    websiteUrl: data.website || '',
    youtubeUrl: formatYoutubeUrl(data.videoUrl),
    githubUrl: data.repo || '',
    xUrl: data.twitter || '',
  }
}
