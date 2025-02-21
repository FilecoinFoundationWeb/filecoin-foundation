import { getTodayISO } from '@/utils/dateUtils'

import { createBlob } from '../services/github/api/createBlob'
import { createCommit } from '../services/github/api/createCommit'
import { createPR } from '../services/github/api/createPr'
import { createTreeBlobs } from '../services/github/api/createTreeBlobs'
import { getLatestCommitOnMain } from '../services/github/api/getLatestCommitOnMain'
import type { FormattedFile } from '../types'

import type { buildEcosystemMarkdownTemplate } from './buildEcosystemMarkdownTemplate'

export type SubmitProjectToGitHubParams = {
  slug: string
  message: string
  markdown: {
    path: string
    template: ReturnType<typeof buildEcosystemMarkdownTemplate>
  }
  file: {
    path: string
    base64: FormattedFile['base64']
  }
}

export async function submitProjectToGithub({
  slug,
  markdown,
  file,
  message,
}: SubmitProjectToGitHubParams) {
  const todayISO = getTodayISO()
  const branchName = `ecosystem-submission/${slug}-${todayISO}`
  const formattedMessage = `${message}: ${slug}`

  const [markdownBlob, logoBlob] = await Promise.all([
    createBlob(markdown.template, 'utf-8'),
    createBlob(file.base64, 'base64'),
  ])

  const treeBlobs = [
    { path: markdown.path, sha: markdownBlob.sha },
    { path: file.path, sha: logoBlob.sha },
  ]

  const latestCommitOnMain = await getLatestCommitOnMain()

  const newTree = await createTreeBlobs({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newBlobs: treeBlobs,
  })

  const newCommit = await createCommit({
    parentCommitSha: latestCommitOnMain.sha,
    treeSha: newTree.sha,
    message: formattedMessage,
  })

  const newPullRequest = await createPR({
    title: formattedMessage,
    commitSha: newCommit.sha,
    branchName,
  })

  return newPullRequest
}
