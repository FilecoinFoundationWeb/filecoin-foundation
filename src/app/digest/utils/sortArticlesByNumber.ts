import type { DigestArticleData } from '@/digest/types/digestTypes'

export function sortArticlesByNumber(
  a: DigestArticleData,
  b: DigestArticleData,
) {
  return a.articleNumber - b.articleNumber
}
