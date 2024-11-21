'use server'

import slugify from 'slugify'

import { getTodayISO } from '@/utils/dateUtils'
import { encrypt } from '@/utils/encryption'

import { createBlob } from './api/createBlob'
import { createCommit } from './api/createCommit'
import { createPR } from './api/createPr'
import { createTreeBlobs } from './api/createTreeBlobs'
import { getLatestCommitOnMain } from './api/getLatestCommitOnMain'
import {
  getMarkdownTemplate,
  type MarkdownTemplateParams,
} from './utils/markdownUtils'
import { getFolderPaths } from './utils/pathUtils'

type SubmitProjectParams = {
  name: string
  email: string
  timestampISO: string
  yearJoinedISO: string
  logo: {
    base64: string
    format: string
  }
  projectName: MarkdownTemplateParams['projectName']
  category: MarkdownTemplateParams['category']
  subcategories: MarkdownTemplateParams['subcategories']
  tech: MarkdownTemplateParams['tech']
  shortDescription: MarkdownTemplateParams['shortDescription']
  longDescription: MarkdownTemplateParams['longDescription']
  websiteUrl: MarkdownTemplateParams['websiteUrl']
  youtubeEmbedUrl: MarkdownTemplateParams['youtubeUrl']
  githubUrl: MarkdownTemplateParams['githubUrl']
  xUrl: MarkdownTemplateParams['xUrl']
}

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
    yearJoined: data.yearJoinedISO,
    websiteUrl: data.websiteUrl,
    youtubeUrl: data.youtubeEmbedUrl,
    githubUrl: data.githubUrl,
    xUrl: data.xUrl,
    createdOn: data.timestampISO,
    updatedOn: data.timestampISO,
    publishedOn: data.timestampISO,
  })

  const latestCommitOnMain = await getLatestCommitOnMain()

  const { markdownBlob, imageBlob } = await createBlobs({
    markdownTemplate,
    logo: data.logo,
  })

  const newTree = await createTreeBlobs({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newBlobs: [
      {
        path: `${mediaFolder}/${slug}.${data.logo.format}`,
        sha: imageBlob.sha,
      },
      {
        path: `${ecosystemFolder}/${slug}.md`,
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

type CreateBlobsParams = {
  markdownTemplate: string
  logo: SubmitProjectParams['logo']
}

async function createBlobs({ markdownTemplate, logo }: CreateBlobsParams) {
  const [markdownBlob, imageBlob] = await Promise.all([
    createBlob(markdownTemplate, 'utf-8'),
    createBlob(logo.base64, 'base64'),
  ])

  return { markdownBlob, imageBlob }
}
