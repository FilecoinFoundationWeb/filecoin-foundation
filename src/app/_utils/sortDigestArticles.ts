import { type DigestArticleData } from '@/types/digestTypes'

export function sortDigestArticles(
  a: DigestArticleData,
  b: DigestArticleData,
): number {
  if (Number(a.issueNumber) !== Number(b.issueNumber)) {
    return Number(a.issueNumber) - Number(b.issueNumber)
  }
  return a.articleNumber - b.articleNumber
}
