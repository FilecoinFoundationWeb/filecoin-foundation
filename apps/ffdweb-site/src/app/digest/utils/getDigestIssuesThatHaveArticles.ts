import { getDigestArticlesData } from './getDigestArticleData'
import { getDigestIssueData } from './getDigestIssueData'

export async function getDigestIssuesThatHaveArticles() {
  const allArticles = await getDigestArticlesData()

  const allIssueNumbers = Array.from(
    new Set(allArticles.map((article) => article.issueNumber)),
  )

  const allIssues = await Promise.all(
    allIssueNumbers.map((issueNumber) => getDigestIssueData(issueNumber)),
  )

  return allIssues.sort((a, b) => b.issueNumber - a.issueNumber)
}
