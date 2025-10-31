import type { DigestIssueFrontmatter } from '../schemas/DigestIssueFrontmatterSchema'

import { getDigestArticleData } from './getDigestArticleData'
import { getDigestIssueData } from './getDigestIssueData'

type getAllDigestArticlesWithIssueContextProps = {
  issueNumber: DigestIssueFrontmatter['issue-number']
}

export async function getAllDigestArticlesWithIssueContext({
  issueNumber,
}: getAllDigestArticlesWithIssueContextProps) {
  const digestIssue = await getDigestIssueData(issueNumber)

  const articles = await Promise.all(
    digestIssue.articles.map(async (articleSlug, index) => {
      try {
        const article = await getDigestArticleData(articleSlug)
        return {
          ...article,
          issueNumber: digestIssue.issueNumber,
          articleNumber: index + 1,
        }
      } catch {
        return null
      }
    }),
  ).then((results) => results.filter(Boolean))

  return articles
}

type getDigestArticleWithIssueContextProps = {
  issueNumber: DigestIssueFrontmatter['issue-number']
  articleSlug: DigestIssueFrontmatter['articles'][number]
}

export async function getDigestArticleWithIssueContext({
  issueNumber,
  articleSlug,
}: getDigestArticleWithIssueContextProps) {
  const digestIssue = await getDigestIssueData(issueNumber)

  const articleIndex = digestIssue?.articles.findIndex(
    (article) => article === articleSlug,
  )

  if (articleIndex === -1) {
    throw new Error(`Article ${articleSlug} not found in issue ${issueNumber}`)
  }

  const articleData = digestIssue.articles[articleIndex]
  const article = await getDigestArticleData(articleData)

  return {
    ...article,
    issueNumber: digestIssue.issueNumber,
    articleNumber: articleIndex + 1,
  }
}
