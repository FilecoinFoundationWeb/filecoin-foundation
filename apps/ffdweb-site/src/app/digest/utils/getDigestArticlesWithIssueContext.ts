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
    digestIssue.articles.map(async (articleData, index) => {
      try {
        const article = await getDigestArticleData(articleData.title)
        return {
          ...article,
          issueNumber: digestIssue.issueNumber,
          articleNumber: articleData.articleNumber ?? index + 1,
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
  articleSlug: DigestIssueFrontmatter['articles'][number]['title']
}

export async function getDigestArticleWithIssueContext({
  issueNumber,
  articleSlug,
}: getDigestArticleWithIssueContextProps) {
  const digestIssue = await getDigestIssueData(issueNumber)

  const articleData = digestIssue?.articles.find(
    (article) => article.title === articleSlug,
  )

  if (!articleData) {
    throw new Error(`Article ${articleSlug} not found in issue ${issueNumber}`)
  }

  const article = await getDigestArticleData(articleData.title)

  return {
    ...article,
    issueNumber: digestIssue.issueNumber,
    articleNumber: articleData.articleNumber ?? 0,
  }
}
