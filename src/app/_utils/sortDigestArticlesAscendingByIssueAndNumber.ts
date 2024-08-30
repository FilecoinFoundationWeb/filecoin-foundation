import { type DigestArticleData } from '@/types/digestTypes'

export function sortDigestArticlesAscendingByIssueAndNumber(
  a: DigestArticleData,
  b: DigestArticleData,
) {
  if (Number(a.issueNumber) !== Number(b.issueNumber)) {
    return Number(a.issueNumber) - Number(b.issueNumber)
  }
  return a.articleNumber - b.articleNumber
}
