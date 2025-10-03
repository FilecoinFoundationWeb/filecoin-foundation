import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { DigestIssueFrontmatterSchema } from '../../schemas/DigestIssueFrontmatterSchema'

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

  return allIssues.map(transformDigestIssueData)
}

function getDigestIssueMarkdownData(issueNumber: string) {
  return getMarkdownData({
    slug: `issue-${issueNumber}`,
    directoryPath: DIGEST_ISSUES_DIRECTORY_PATH,
    zodSchema: DigestIssueFrontmatterSchema,
  })
}

function transformDigestIssueData(
  issue: Awaited<ReturnType<typeof getDigestIssueMarkdownData>>,
) {
  return {
    ...issue,
    kicker: `Issue ${issue.issueNumber} - ${formatDate(issue.publishedOn, 'MMM yyyy')}`,
    seo: {
      ...issue.seo,
      title: issue.seo?.title || issue.title,
    },
  }
}
