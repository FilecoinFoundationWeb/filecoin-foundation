import { getDigestArticlesData } from './getDigestArticleData'
import { getDigestIssuesData } from './getDigestIssueData'

export type DigestSitemapConfig = {
  digestPath: string
  baseUrl: string
  issuesContentPath: string
  articlesContentPath: string
}

export async function generateDigestSitemapRoutes({
  digestPath,
  baseUrl,
  issuesContentPath,
  articlesContentPath,
}: DigestSitemapConfig) {
  const issues = await getDigestIssuesData(issuesContentPath)

  const issueRoutes = issues.map(({ issuePath, updatedOn }) => ({
    url: `${baseUrl}${digestPath}/${issuePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  const articles = await getDigestArticlesData(articlesContentPath)

  const articleRoutes = articles.map(({ articlePath, updatedOn }) => ({
    url: `${baseUrl}${digestPath}/${articlePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  return [...issueRoutes, ...articleRoutes]
}
