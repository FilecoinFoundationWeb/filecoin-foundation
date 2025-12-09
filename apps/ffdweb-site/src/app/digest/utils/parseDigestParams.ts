import type { DigestIssueParams } from '@filecoin-foundation/utils/types/paramsTypes'

export async function parseDigestIssueParams(
  params: Promise<DigestIssueParams>,
) {
  const resolvedParams = await params
  const issueNumber = parseIssueNumberFromSlug(resolvedParams.issue)
  return { issueNumber }
}

function parseIssueNumberFromSlug(issue: string) {
  return issue.replace('issue-', '')
}
