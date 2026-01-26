export const ISSUE_NUMBER_PREFIX = 'issue-'

type BuildIssuePathParams = {
  issueNumber: number
}

export function buildIssuePath({ issueNumber }: BuildIssuePathParams) {
  return `${ISSUE_NUMBER_PREFIX}${issueNumber}`
}

type BuildArticlePathParams = {
  issueNumber: number
  articleSlug: string
}

export function buildArticlePath({
  issueNumber,
  articleSlug,
}: BuildArticlePathParams) {
  const issuePath = buildIssuePath({ issueNumber })
  return `${issuePath}/${articleSlug}`
}
