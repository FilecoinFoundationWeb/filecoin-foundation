import { digestIssues } from '../../data/issues'

export function getDigestIssueFromSlug(issueSlug: string) {
  const issueNumber = issueSlug.replace('issue-', '')
  const digestIssue = digestIssues.find((issue) => issue.number === issueNumber)

  return digestIssue
}
