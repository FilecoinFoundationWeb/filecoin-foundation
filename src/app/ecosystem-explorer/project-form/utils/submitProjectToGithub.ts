import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { getTodayISO } from '@/utils/dateUtils'

import { createBlob } from '../services/github/api/createBlob'
import { createCommit } from '../services/github/api/createCommit'
import { createPR } from '../services/github/api/createPr'
import { createTreeBlobs } from '../services/github/api/createTreeBlobs'
import { getLatestCommitOnMain } from '../services/github/api/getLatestCommitOnMain'
import type { FormattedFile } from '../types'

export type SubmitProjectToGitHubParams = {
  slug: string
  markdownTemplate: string
  prTitle: string
  logo: {
    path: string
    base64: FormattedFile['base64']
  }
}

export async function submitProjectToGithub({
  slug,
  markdownTemplate,
  logo,
  prTitle,
}: SubmitProjectToGitHubParams) {
  const todayISO = getTodayISO()
  const branchName = `ecosystem-submission/${slug}-${todayISO}`

  const [markdownBlob, logoBlob] = await Promise.all([
    createBlob(markdownTemplate, 'utf-8'),
    createBlob(logo.base64, 'base64'),
  ])

  const treeBlobs = [
    {
      path: `${ECOSYSTEM_PROJECTS_DIRECTORY_PATH}/${slug}.md`,
      sha: markdownBlob.sha,
    },
    {
      path: logo.path,
      sha: logoBlob.sha,
    },
  ]

  const latestCommitOnMain = await getLatestCommitOnMain()

  const newTree = await createTreeBlobs({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newBlobs: treeBlobs,
  })

  const newCommit = await createCommit({
    parentCommitSha: latestCommitOnMain.sha,
    treeSha: newTree.sha,
    message: `Ecosystem Project Form Submission: ${slug}`,
  })

  const newPullRequest = await createPR({
    title: `${prTitle}: ${slug}`,
    commitSha: newCommit.sha,
    branchName,
  })

  return newPullRequest
}
