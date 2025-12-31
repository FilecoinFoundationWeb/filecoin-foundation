type Article = {
  issueNumber: number
  articleNumber: number
}

export function validateUniqueArticleNumbers(articles: Array<Article>) {
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
