import { getDigestArticleData } from './getDigestArticleData'
import type { DigestIssueData } from './types/digestType'

export type getAllDigestArticlesWithIssueContextProps = {
  digestIssue: DigestIssueData
  articleDirectoryPath: string
}

export async function getAllDigestArticlesWithIssueContext({
  digestIssue,
  articleDirectoryPath,
}: getAllDigestArticlesWithIssueContextProps) {
  return await Promise.all(
    digestIssue.articles.map(async (articleSlug, index) => {
      const article = await getDigestArticleData(
        articleSlug,
        articleDirectoryPath,
      )

      return {
        ...article,
        issueNumber: digestIssue.issueNumber,
        articleNumber: index + 1,
      }
    }),
  )
}

export type getDigestArticleWithIssueContextProps = {
  articleSlug: string
  digestIssue: DigestIssueData
  articleDirectoryPath: string
}

export async function getDigestArticleWithIssueContext({
  articleSlug,
  digestIssue,
  articleDirectoryPath,
}: getDigestArticleWithIssueContextProps) {
  const article = await getDigestArticleData(articleSlug, articleDirectoryPath)

  const articleIndex = digestIssue.articles.findIndex(
    (article) => article === articleSlug,
  )

  return {
    ...article,
    issueNumber: digestIssue.issueNumber,
    articleNumber: articleIndex + 1,
  }
}
