import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import removeMarkdown from 'remove-markdown'

import { PATHS } from '@/constants/paths'

import { DigestArticleFrontmatterSchema } from '../schemas/DigestArticleFrontmatterSchema'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export async function getDigestArticleData(slug: string) {
  const data = await getDigestMarkdownData(slug)
  return transformDigestArticleData(data)
}

export async function getDigestArticlesData() {
  const allArticles = await getAllMarkdownData({
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodSchema: DigestArticleFrontmatterSchema,
  })

  return allArticles
    .map(transformDigestArticleData)
    .sort((a, b) => a.articleNumber - b.articleNumber)
}

function getDigestMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodSchema: DigestArticleFrontmatterSchema,
  })
}

function transformDigestArticleData(
  article: Awaited<ReturnType<typeof getDigestMarkdownData>>,
) {
  return {
    ...article,
    description: removeMarkdown(article.content),
    seo: {
      ...article.seo,
      title: article.seo.title || article.title,
    },
  }
}
