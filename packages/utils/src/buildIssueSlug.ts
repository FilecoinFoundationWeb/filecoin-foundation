const ISSUE_NUMBER_PREFIX = 'issue-'

export function buildIssueSlug(issueNumber: number) {
  return `${ISSUE_NUMBER_PREFIX}${issueNumber}`
}
