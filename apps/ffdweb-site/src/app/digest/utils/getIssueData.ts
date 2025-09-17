import type { IssueData } from '../data/issues'
import { ISSUES_DATA } from '../data/issues'

import { getDigestArticlesData } from './getDigestArticleData'

type IssueDataResult = IssueData | { error: string }

export function getIssueData(
  issueNumber: IssueData['number'],
): IssueDataResult {
  const issueData = ISSUES_DATA[issueNumber]

  if (issueData) {
    return {
      number: issueNumber,
      ...issueData,
    }
  }

  return {
    error: `Issue ${issueNumber} not found`,
  }
}

export async function getAllIssues(): Promise<IssueData[]> {
  const articles = await getDigestArticlesData()

  const issueNumbers = [
    ...new Set(articles.map((article) => article.issueNumber)),
  ].sort((a, b) => parseInt(a) - parseInt(b))

  const issues = issueNumbers.map((issueNumber) =>
    getIssueData(issueNumber),
  ) as IssueData[]

  return issues
}
