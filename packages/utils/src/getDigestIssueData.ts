import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import { DigestIssueFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

export async function getDigestIssueData(
  issueNumber: string,
  directoryPath: string,
) {
  const data = await getDigestIssueMarkdownData(issueNumber, directoryPath)
  return transformDigestIssueData(data)
}

export async function getAllDigestIssuesData(directoryPath: string) {
  const allIssues = await getAllMarkdownData({
    directoryPath,
    zodSchema: DigestIssueFrontmatterSchema,
  })

  const issues = allIssues
    .map(transformDigestIssueData)
    .sort((a, b) => Number(b.issueNumber) - Number(a.issueNumber))

  return issues
}

function getDigestIssueMarkdownData(slug: string, directoryPath: string) {
  return getMarkdownData({
    slug,
    directoryPath,
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
