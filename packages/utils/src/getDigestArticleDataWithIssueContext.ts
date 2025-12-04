import { getDigestArticleData } from './getDigestArticleData'
import { getDigestIssueData } from './getDigestIssueData'
import type { DigestArticleData, DigestIssueData } from './types/digestType'

export type getAllDigestArticlesWithIssueContextProps = {
  digestIssue: DigestIssueData
  articleDirectoryPath: string
}

export async function getAllDigestArticlesWithIssueContext({
  digestIssue,
  articleDirectoryPath,
}: getAllDigestArticlesWithIssueContextProps) {
  const articles = await Promise.all(
    digestIssue.articles.map(async (articleSlug, index) => {
      try {
        const article = await getDigestArticleData(
          articleSlug,
          articleDirectoryPath,
        )
        if (article.issueNumber !== digestIssue.issueNumber) {
          return null
        }
        return {
          ...article,
          articleNumber: index + 1,
        }
      } catch {
        return null
      }
    }),
  ).then((results) =>
    results.filter(
      (article): article is NonNullable<typeof article> => article !== null,
    ),
  )

  return articles
}

export type getDigestArticleWithIssueContextProps = {
  articleSlug: string
  articleIssueNumber: DigestArticleData['issueNumber']
  articleDirectoryPath: string
  issueDirectoryPath: string
}

export async function getDigestArticleWithIssueContext({
  articleSlug,
  articleIssueNumber,
  articleDirectoryPath,
  issueDirectoryPath,
}: getDigestArticleWithIssueContextProps) {
  const article = await getDigestArticleData(articleSlug, articleDirectoryPath)

  if (!article) {
    return null
  }

  const digestIssue = await getDigestIssueData(
    articleIssueNumber,
    issueDirectoryPath,
  )

  const articleIndex = digestIssue.articles.findIndex(
    (article) => article === articleSlug,
  )

  return {
    ...article,
    articleNumber: articleIndex + 1,
  }
}
