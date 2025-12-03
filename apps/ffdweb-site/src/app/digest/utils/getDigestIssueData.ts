import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import { DigestIssueFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { PATHS } from '@/constants/paths'

const DIGEST_ISSUES_DIRECTORY_PATH = PATHS.DIGEST.issuePath

export async function getDigestIssueData(issueNumber: string) {
  const data = await getDigestIssueMarkdownData(issueNumber)
  return transformDigestIssueData(data)
}

export async function getAllDigestIssuesData() {
  const allIssues = await getAllMarkdownData({
    directoryPath: DIGEST_ISSUES_DIRECTORY_PATH,
    zodSchema: DigestIssueFrontmatterSchema,
  })

  return allIssues
    .map(transformDigestIssueData)
    .sort((a, b) => Number(b.issueNumber) - Number(a.issueNumber))
}

function getDigestIssueMarkdownData(issueNumber: string) {
  return getMarkdownData({
    slug: issueNumber,
    directoryPath: DIGEST_ISSUES_DIRECTORY_PATH,
    zodSchema: DigestIssueFrontmatterSchema,
  })
}

function transformDigestIssueData(
  issue: Awaited<ReturnType<typeof getDigestIssueMarkdownData>>,
) {
  return {
    ...issue,
    issueNumber: issue.issueNumber,
    kicker: `Issue ${issue.issueNumber} - ${formatDate(issue.publishedOn, 'MMM yyyy')}`,
    seo: {
      ...issue.seo,
      title: issue.seo?.title || issue.title,
    },
  }
}
