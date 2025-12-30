import { getDigestArticlesData } from './getDigestArticleData'

type GetDigestArticlesWithIssueContextProps = {
  issueNumber: number
  directoryPath: string
}

export async function getDigestArticlesWithIssueContext({
  issueNumber,
  directoryPath,
}: GetDigestArticlesWithIssueContextProps) {
  const allArticles = await getDigestArticlesData(directoryPath)

  return allArticles.filter((article) => article.issueNumber === issueNumber)
}
