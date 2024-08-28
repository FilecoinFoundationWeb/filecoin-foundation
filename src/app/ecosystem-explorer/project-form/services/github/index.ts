'use server'

import slugify from 'slugify'

import { getTodayISO } from '@/utils/dateUtils'

import { createBlob } from './api/createBlob'
import { createCommit } from './api/createCommit'
import { createPR } from './api/createPr'
import { createTree } from './api/createTree'
import { getLatestCommitOnMain } from './api/getLatestCommitOnMain'
import type { AllowedImageFormats } from './utils/fileUtils'
import { getMarkdownTemplate } from './utils/markdownUtils'
import { getFolderPaths } from './utils/pathUtils'

type CreateProjectBlobsParams = {
  markdownTemplate: string
  logo: SubmitProjectParams['logo']
}

async function createProjectBlobs({
  markdownTemplate,
  logo,
}: CreateProjectBlobsParams) {
  const [markdownBlob, imageBlob] = await Promise.all([
    createBlob(markdownTemplate, 'utf-8'),
    createBlob(logo.base64, 'base64'),
  ])
  return { markdownBlob, imageBlob }
}

type CreateNewTreeParams = {
  latestCommitOnMain: Awaited<ReturnType<typeof getLatestCommitOnMain>>
  mediaFolder: string
  ecosystemFolder: string
  slug: string
  logo: SubmitProjectParams['logo']
  markdownBlob: Awaited<ReturnType<typeof createBlob>>
  imageBlob: Awaited<ReturnType<typeof createBlob>>
}

function createProjectTree({
  latestCommitOnMain,
  mediaFolder,
  ecosystemFolder,
  slug,
  logo,
  markdownBlob,
  imageBlob,
}: CreateNewTreeParams) {
  return createTree({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newTrees: [
      {
        path: `${mediaFolder}/${slug}.${logo.format}`,
        mode: '100644',
        type: 'blob',
        sha: imageBlob.sha,
      },
      {
        path: `${ecosystemFolder}/${slug}.md`,
        mode: '100644',
        type: 'blob',
        sha: markdownBlob.sha,
      },
    ],
  })
}

type SubmitProjectParams = {
  projectName: string
  logo: {
    base64: string
    format: AllowedImageFormats
  }
}

export async function submitProjectToGithub({
  projectName,
  logo,
}: SubmitProjectParams) {
  const { mediaFolder, ecosystemFolder, publicFolder } = getFolderPaths()
  const today = getTodayISO()

  const slug = slugify(projectName, {
    lower: true,
    strict: true,
  })

  const branchName = `ecosystem-submission/${slug}-${today}`

  const markdownTemplate = getMarkdownTemplate({
    projectName,
    imagePath: `${publicFolder}/${slug}.${logo.format}`,
  })

  const latestCommitOnMain = await getLatestCommitOnMain()

  const { markdownBlob, imageBlob } = await createProjectBlobs({
    markdownTemplate,
    logo,
  })

  const newTree = await createProjectTree({
    latestCommitOnMain,
    mediaFolder,
    ecosystemFolder,
    slug,
    logo,
    markdownBlob,
    imageBlob,
  })

  const newCommit = await createCommit({
    parentCommitSha: latestCommitOnMain.sha,
    treeSha: newTree.sha,
    message: 'Form Submission',
  })

  const newPullRequest = await createPR({
    title: `New submission for ${projectName}`,
    commitSha: newCommit.sha,
    branchName,
  })

  return newPullRequest
}
