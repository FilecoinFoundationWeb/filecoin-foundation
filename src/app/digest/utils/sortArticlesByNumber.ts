import { type DigestArticleData } from '@/types/digestTypes'

export function sortArticlesByNumber(
  a: DigestArticleData,
  b: DigestArticleData,
) {
  return a.articleNumber - b.articleNumber
}
