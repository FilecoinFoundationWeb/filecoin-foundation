const ISSUE_NUMBER_PREFIX = 'issue-'

type buildIssuePathProps = {
  issueNumber: number
}

export function buildIssuePath({ issueNumber }: buildIssuePathProps) {
  return `${ISSUE_NUMBER_PREFIX}${issueNumber}`
}

type buildArticlePathProps = {
  issueNumber: number
  articleSlug: string
}

export function buildArticlePath({
  issueNumber,
  articleSlug,
}: buildArticlePathProps) {
  const issuePath = buildIssuePath({ issueNumber })
  return `${issuePath}/${articleSlug}`
}
