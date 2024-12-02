import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { getTodayISO } from '@/utils/dateUtils'

import type { FormattedFile } from '../../types'

import { createBlob } from './api/createBlob'
import { createCommit } from './api/createCommit'
import { createPR } from './api/createPr'
import { createTreeBlobs } from './api/createTreeBlobs'
import { getLatestCommitOnMain } from './api/getLatestCommitOnMain'

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
