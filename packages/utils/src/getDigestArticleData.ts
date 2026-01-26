import removeMarkdown from 'remove-markdown'

import { buildArticlePath } from './buildDigestPath'
import { getAllMarkdownData } from './getAllMarkdownData'
import { getMarkdownData } from './getMarkdownData'
import { DigestArticleFrontmatterSchema } from './schemas/DigestArticleFrontmatterSchema'
import { validateUniqueArticleNumbers } from './validateUniqueArticleNumbers'

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

  validateUniqueArticleNumbers(allArticles)

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
    articlePath: buildArticlePath({
      issueNumber: article.issueNumber,
      articleSlug: article.slug,
    }),
    seo: {
      ...article.seo,
      title: article.seo.title || article.title,
    },
  }
}
