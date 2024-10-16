import type { DigestArticleData } from '../types/digestType'

export function sortArticlesByNumber(
  a: DigestArticleData,
  b: DigestArticleData,
) {
  return a.articleNumber - b.articleNumber
}
