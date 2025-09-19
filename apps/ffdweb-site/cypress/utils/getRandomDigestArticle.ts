import path from 'path'

import fg from 'fast-glob'

import { getEntryFrontmatter } from '@filecoin-foundation/cypress/tasks'
import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'
import type { DigestArticleData } from '@filecoin-foundation/utils/types/digestType'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

type DigestEntryFrontmatter = GenericEntryFrontmatter & {
  'issue-number': DigestArticleData['issueNumber']
}

export type DigestArticleResult = { slug: string; issueNumber: string }

export async function getRandomDigestArticle(
  contentFolder: string,
): Promise<DigestArticleResult> {
  const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), contentFolder),
  })

  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]
  const slug = randomFile.replace(MARKDOWN_EXTENSION, '')

  const frontmatter = await getEntryFrontmatter<DigestEntryFrontmatter>(
    path.join(contentFolder, randomFile.replace(MARKDOWN_EXTENSION, '')),
  )

  const issueNumber = frontmatter['issue-number']

  return { slug, issueNumber }
}
