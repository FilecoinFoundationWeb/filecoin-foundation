'use server'

import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { getTodayISO } from '@/utils/dateUtils'

import { createBlob } from '../services/github/api/createBlob'
import { createCommit } from '../services/github/api/createCommit'
import { createPR } from '../services/github/api/createPr'
import { createTreeBlobs } from '../services/github/api/createTreeBlobs'
import { getLatestCommitOnMain } from '../services/github/api/getLatestCommitOnMain'
import type { FormattedLogo } from '../utils/fileUtils'

type SubmitProjectParams = {
  slug: string
  markdownTemplate: string
  logo?: {
    path: string
    base64: FormattedLogo['base64']
  }
  prTitle: string
}

export async function submitProjectToGithub({
  slug,
  markdownTemplate,
  logo,
  prTitle,
}: SubmitProjectParams) {
  const todayISO = getTodayISO()
  const branchName = `ecosystem-submission/${slug}-${todayISO}`

  const markdownBlob = await createBlob(markdownTemplate, 'utf-8')
  const treeBlobs = [
    {
      path: `${ECOSYSTEM_PROJECTS_DIRECTORY_PATH}/${slug}.md`,
      sha: markdownBlob.sha,
    },
  ]

  if (logo) {
    const imageBlob = await createBlob(logo.base64, 'base64')
    treeBlobs.push({
      sha: imageBlob.sha,
      path: logo.path,
    })
  }

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
