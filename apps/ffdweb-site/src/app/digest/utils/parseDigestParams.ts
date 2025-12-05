import type {
  DigestArticleParams,
  DigestIssueParams,
} from '@filecoin-foundation/utils/types/paramsTypes'

export async function parseDigestIssueParams(
  params: Promise<DigestIssueParams>,
) {
  const resolvedParams = await params
  const issueNumber = parseIssueNumberFromSlug(resolvedParams.issue)
  return { issueNumber }
}

export async function parseDigestArticleParams(
  params: Promise<DigestArticleParams>,
) {
  const resolvedParams = await params
  const issueNumber = parseIssueNumberFromSlug(resolvedParams.issue)
  return {
    issueNumber,
    articleSlug: resolvedParams.slug,
  }
}

function parseIssueNumberFromSlug(issue: string) {
  return issue.replace('issue-', '')
}
