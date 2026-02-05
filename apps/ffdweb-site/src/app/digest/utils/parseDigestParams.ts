import { ISSUE_NUMBER_PREFIX } from '@filecoin-foundation/utils/buildDigestPath'

export function parseIssueSlug(issue: string) {
  if (!issue.startsWith(ISSUE_NUMBER_PREFIX)) {
    throw new Error(`Invalid issue slug: ${issue}`)
  }

  const issueNumber = Number(issue.replace(ISSUE_NUMBER_PREFIX, ''))

  if (
    !Number.isFinite(issueNumber) ||
    !Number.isInteger(issueNumber) ||
    issueNumber <= 0
  ) {
    throw new Error(`Invalid issue slug: ${issue}`)
  }

  return issueNumber
}
