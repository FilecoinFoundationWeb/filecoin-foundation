import { getDigestArticlesData } from './getDigestArticleData'

export async function getDigestArticlesWithIssueContext(issueNumber: number) {
  const articles = await getDigestArticlesData()
  return articles.filter((article) => article.issueNumber === issueNumber)
}
