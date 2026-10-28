import { getEntryOrNotFound } from '@filecoin-foundation/utils/getEntryOrNotFound'

import { digestIssueCollection } from '@/qino/collections/digestIssues'

import { getDigestArticlesData } from './getDigestArticleData'

export async function getDigestIssuesThatHaveArticles() {
  const allArticles = await getDigestArticlesData()

  const allIssueNumbers = Array.from(
    new Set(allArticles.map((article) => article.issueNumber)),
  )

  const allIssues = await Promise.all(
    allIssueNumbers.map((issueNumber) =>
      getEntryOrNotFound(digestIssueCollection, issueNumber.toString()),
    ),
  )

  return allIssues.sort((a, b) => b.issueNumber - a.issueNumber)
}
