import type { DigestArticleData } from './types/digestType.ts'

export function validateUniqueArticleNumbers(articles: DigestArticleData[]) {
  const seen = new Set<string>()

  articles.forEach(({ issueNumber, articleNumber }) => {
    const key = `${issueNumber}-${articleNumber}`
    if (seen.has(key)) {
      throw new Error(
        `Duplicate article number ${articleNumber} found in issue ${issueNumber}`,
      )
    }
    seen.add(key)
  })
}
