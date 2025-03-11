import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { LearningResourceFrontmatterSchema } from '../schemas/LearningResourceFrontmatterSchema'

const LEARNING_RESOURCES_DIRECTORY_PATH = PATHS.LEARNING_RESOURCES
  .entriesContentPath as string

export async function getLearningResourceData(slug: string) {
  const data = await getLearningResourceMarkdownData(slug)
  return transformLearningResourceData(data)
}

export async function getLearningResourcesData() {
  const allPosts = await getAllMarkdownData({
    directoryPath: LEARNING_RESOURCES_DIRECTORY_PATH,
    zodSchema: LearningResourceFrontmatterSchema,
  })

  return allPosts.map(transformLearningResourceData)
}

function getLearningResourceMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: LEARNING_RESOURCES_DIRECTORY_PATH,
    zodSchema: LearningResourceFrontmatterSchema,
  })
}

function transformLearningResourceData(
  post: Awaited<ReturnType<typeof getLearningResourceMarkdownData>>,
) {
  return {
    ...post,
    seo: {
      ...post.seo,
      title: post.seo.title || post.title,
    },
  }
}
