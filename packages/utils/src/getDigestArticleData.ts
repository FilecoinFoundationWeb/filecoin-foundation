import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import removeMarkdown from 'remove-markdown'
import { DigestArticleFrontmatterSchema } from './schemas/DigestArticleFrontmatterSchema'

export async function getDigestArticleData(
  slug: string,
  directoryPath: string,
) {
  const data = await getDigestMarkdownData(slug, directoryPath)
  return transformDigestArticleData(data)
}

export async function getDigestArticlesData(directoryPath: string) {
  const allArticles = await getAllMarkdownData({
    directoryPath,
    zodSchema: DigestArticleFrontmatterSchema,
  })

  return allArticles
    .map(transformDigestArticleData)
    .sort((a, b) => a.articleNumber - b.articleNumber)
}

function getDigestMarkdownData(slug: string, directoryPath: string) {
  return getMarkdownData({
    slug,
    directoryPath,
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
