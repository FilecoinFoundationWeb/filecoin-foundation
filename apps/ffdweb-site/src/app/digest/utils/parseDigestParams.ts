const ISSUE_NUMBER_PREFIX = 'issue-'

export function parseIssueSlug(issue: string) {
  if (!issue.startsWith(ISSUE_NUMBER_PREFIX)) {
    throw new Error(`Invalid issue slug: ${issue}`)
  }
  return Number(issue.replace(ISSUE_NUMBER_PREFIX, ''))
}

export function buildIssueSlug(issueNumber: string | number) {
  return `${ISSUE_NUMBER_PREFIX}${issueNumber}`
}
