'use server'

import slugify from 'slugify'

import { getTodayISO } from '@/utils/dateUtils'

import { createBlob } from './api/createBlob'
import { createCommit } from './api/createCommit'
import { createPR } from './api/createPr'
import { createTree } from './api/createTree'
import { getLatestCommitOnMain } from './api/getLatestCommitOnMain'
import { AllowedImageFormats } from './utils/fileUtils'
import { getMarkdownTemplate } from './utils/markdownUtils'
import { getFolderPaths } from './utils/pathUtils'

type SubmitProjectParams = {
  projectName: string
  logo: {
    base64: string
    format: AllowedImageFormats
  }
}

async function createProjectBlobs(
  markdownTemplate: string,
  logo: { base64: string; format: AllowedImageFormats },
) {
  const [markdownBlob, imageBlob] = await Promise.all([
    createBlob(markdownTemplate, 'utf-8'),
    createBlob(logo.base64, 'base64'),
  ])
  return { markdownBlob, imageBlob }
}

async function createNewTree(
  latestCommitOnMain: any,
  mediaFolder: string,
  ecosystemFolder: string,
  slug: string,
  logo: { format: AllowedImageFormats },
  markdownBlob: any,
  imageBlob: any,
) {
  return await createTree({
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

  const { markdownBlob, imageBlob } = await createProjectBlobs(
    markdownTemplate,
    logo,
  )
  const newTree = await createNewTree(
    latestCommitOnMain,
    mediaFolder,
    ecosystemFolder,
    slug,
    logo,
    markdownBlob,
    imageBlob,
  )

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
