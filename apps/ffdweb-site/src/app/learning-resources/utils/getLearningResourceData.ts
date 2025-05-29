import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { LearningResourceFrontmatterSchema } from '../schemas/LearningResourceFrontmatterSchema'

const LEARNING_RESOURCES_DIRECTORY_PATH = PATHS.LEARNING_RESOURCES.entriesPath

export async function getLearningResourceData(slug: string) {
  const data = await getLearningResourceMarkdownData(slug)
  return transformLearningResourceData(data)
}

export async function getLearningResourcesData() {
  const allResources = await getAllMarkdownData({
    directoryPath: LEARNING_RESOURCES_DIRECTORY_PATH,
    zodSchema: LearningResourceFrontmatterSchema,
  })

  return allResources.map(transformLearningResourceData)
}

function getLearningResourceMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: LEARNING_RESOURCES_DIRECTORY_PATH,
    zodSchema: LearningResourceFrontmatterSchema,
  })
}

function transformLearningResourceData(
  resource: Awaited<ReturnType<typeof getLearningResourceMarkdownData>>,
) {
  return {
    ...resource,
    seo: {
      ...resource.seo,
      title: resource.seo.title || resource.title,
    },
  }
}
