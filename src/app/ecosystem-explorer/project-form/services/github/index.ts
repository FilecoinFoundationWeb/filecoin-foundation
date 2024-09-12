'use server'

import slugify from 'slugify'

import { getTodayISO } from '@/utils/dateUtils'
import { encrypt } from '@/utils/encryption'

import { createBlob } from './api/createBlob'
import { createCommit } from './api/createCommit'
import { createPR } from './api/createPr'
import { createTree } from './api/createTree'
import { getLatestCommitOnMain } from './api/getLatestCommitOnMain'
import type { AllowedImageFormats } from './utils/fileUtils'
import {
  getMarkdownTemplate,
  type GetMarkdownTemplateParams,
} from './utils/markdownUtils'
import { getFolderPaths } from './utils/pathUtils'

type SubmitProjectParams = {
  name: string
  email: string
  timestampISO: string
  logo: {
    base64: string
    format: AllowedImageFormats
  }
} & Omit<
  GetMarkdownTemplateParams,
  | 'imagePath'
  | 'encryptedName'
  | 'encryptedEmail'
  | 'createdOn'
  | 'updatedOn'
  | 'publishedOn'
>

export async function submitProjectToGithub(data: SubmitProjectParams) {
  const { mediaFolder, ecosystemFolder, publicFolder } = getFolderPaths()
  const todayISO = getTodayISO()

  const slug = slugify(data.projectName, {
    lower: true,
    strict: true,
  })

  const branchName = `ecosystem-submission/${slug}-${todayISO}`

  const markdownTemplate = getMarkdownTemplate({
    encryptedEmail: encrypt(data.email),
    encryptedName: encrypt(data.name),
    projectName: data.projectName,
    imagePath: `${publicFolder}/${slug}.${data.logo.format}`,
    category: data.category,
    subcategories: data.subcategories,
    tech: data.tech,
    shortDescription: data.shortDescription,
    longDescription: data.longDescription,
    yearJoined: data.yearJoined,
    websiteUrl: data.websiteUrl,
    youtubeUrl: data.youtubeUrl,
    githubUrl: data.githubUrl,
    xHandle: data.xHandle,
    createdOn: data.timestampISO,
    updatedOn: data.timestampISO,
    publishedOn: data.timestampISO,
  })

  const latestCommitOnMain = await getLatestCommitOnMain()

  const { markdownBlob, imageBlob } = await createProjectBlobs({
    markdownTemplate,
    logo: data.logo,
  })

  const newTree = await createTree({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newTrees: [
      {
        path: `${mediaFolder}/${slug}.${data.logo.format}`,
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

  const newCommit = await createCommit({
    parentCommitSha: latestCommitOnMain.sha,
    treeSha: newTree.sha,
    message: `Ecosystem Project Form Submission: ${data.projectName}`,
  })

  const newPullRequest = await createPR({
    title: `Ecosystem Project Form Submission: ${data.projectName}`,
    commitSha: newCommit.sha,
    branchName,
  })

  return newPullRequest
}

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
