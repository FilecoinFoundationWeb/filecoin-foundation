export type SlugParams = {
  slug: string
}

export type DigestIssueParams = {
  issue: string
}

export type DigestArticleParams = DigestIssueParams & SlugParams
