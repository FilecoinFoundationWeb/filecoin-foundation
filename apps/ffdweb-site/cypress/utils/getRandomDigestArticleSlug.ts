import path from 'path'

import fg from 'fast-glob'

import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'

import { getDigestIssueData } from '../../src/app/digest/utils/getDigestIssueData'

export async function getRandomDigestArticleSlug(contentFolder: string) {
  const issueFiles = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), contentFolder),
  })

  if (!issueFiles.length) {
    throw new Error(`No issue files found in ${contentFolder}`)
  }

  const randomIssueIndex = Math.floor(Math.random() * issueFiles.length)
  const randomIssueFile = issueFiles[randomIssueIndex]

  const issueNumber = randomIssueFile.replace(MARKDOWN_EXTENSION, '')

  const digestIssue = await getDigestIssueData(parseInt(issueNumber))

  if (!digestIssue || !digestIssue.articles.length) {
    throw new Error(`No articles found in issue ${issueNumber}`)
  }

  const randomArticleIndex = Math.floor(
    Math.random() * digestIssue.articles.length,
  )
  const randomArticleSlug = digestIssue.articles[randomArticleIndex]

  return {
    issueNumber,
    articleSlug: randomArticleSlug,
  }
}
