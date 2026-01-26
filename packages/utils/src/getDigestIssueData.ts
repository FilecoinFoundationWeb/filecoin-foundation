import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import { DigestIssueFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { buildIssuePath } from './buildDigestPath'

export async function getDigestIssueData(
  issueNumber: number,
  directoryPath: string,
) {
  const data = await getDigestIssueMarkdownData(issueNumber, directoryPath)
  return transformDigestIssueData(data)
}

export async function getDigestIssuesData(directoryPath: string) {
  const allIssues = await getAllMarkdownData({
    directoryPath,
    zodSchema: DigestIssueFrontmatterSchema,
  })

  const issues = allIssues
    .map(transformDigestIssueData)
    .sort((a, b) => b.issueNumber - a.issueNumber)

  return issues
}

function getDigestIssueMarkdownData(
  issueNumber: number,
  directoryPath: string,
) {
  return getMarkdownData({
    slug: issueNumber.toString(),
    directoryPath,
    zodSchema: DigestIssueFrontmatterSchema,
  })
}

function transformDigestIssueData(
  issue: Awaited<ReturnType<typeof getDigestIssueMarkdownData>>,
) {
  return {
    ...issue,
    issuePath: buildIssuePath({ issueNumber: issue.issueNumber }),
    kicker: `Issue ${issue.issueNumber} - ${formatDate(issue.publishedOn, 'MMM yyyy')}`,
    seo: {
      ...issue.seo,
      title: issue.seo?.title || issue.title,
    },
  }
}

export type DigestIssueData = Awaited<ReturnType<typeof getDigestIssueData>>
