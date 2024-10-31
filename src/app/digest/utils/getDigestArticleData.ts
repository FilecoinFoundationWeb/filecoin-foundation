import removeMarkdown from 'remove-markdown'

import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { DigestArticleFrontMatterSchema } from '../schemas/FrontMatterSchema'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export function getDigestArticleData(slug: string) {
  const data = getDigestMarkdownData(slug)
  return transformDigestArticleData(data)
}

export function getDigestArticlesData() {
  const allArticles = getAllMarkdownData({
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodParser: DigestArticleFrontMatterSchema.parse,
  })

  return allArticles
    .map(transformDigestArticleData)
    .sort((a, b) => a.articleNumber - b.articleNumber)
}

function getDigestMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodParser: DigestArticleFrontMatterSchema.parse,
  })
}

function transformDigestArticleData(
  article: ReturnType<typeof getDigestMarkdownData>,
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
