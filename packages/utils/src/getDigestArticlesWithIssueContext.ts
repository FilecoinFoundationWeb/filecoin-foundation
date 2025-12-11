import { getDigestArticlesData } from './getDigestArticleData'

type getDigestArticlesWithIssueContextProps = {
  issueNumber: number
  directoryPath: string
}

export async function getDigestArticlesWithIssueContext({
  issueNumber,
  directoryPath,
}: getDigestArticlesWithIssueContextProps) {
  const allArticles = await getDigestArticlesData(directoryPath)

  return allArticles.filter((article) => article.issueNumber === issueNumber)
}
