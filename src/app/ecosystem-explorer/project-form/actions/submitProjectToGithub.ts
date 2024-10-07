'use server'

import slugify from 'slugify'

import { getTodayISO } from '@/utils/dateUtils'
import { encrypt } from '@/utils/encryption'

import { createBlob } from '../services/github/api/createBlob'
import { createCommit } from '../services/github/api/createCommit'
import { createPR } from '../services/github/api/createPr'
import { createTreeBlobs } from '../services/github/api/createTreeBlobs'
import { getLatestCommitOnMain } from '../services/github/api/getLatestCommitOnMain'
import type { AllowedImageFormats } from '../services/github/utils/fileUtils'
import {
  getMarkdownTemplate,
  type MarkdownTemplateParams,
} from '../services/github/utils/markdownUtils'
import { getFolderPaths } from '../services/github/utils/pathUtils'

export type ProjectData = {
  name: string
  email: string
  timestampISO: string
  yearJoinedISO: string
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

type ProjectLogo = {
  base64: string
  format: AllowedImageFormats
}

type SubmitProjectParams = {
  data: ProjectData
  logo: ProjectLogo
}

export async function submitProjectToGithub({
  data,
  logo,
}: SubmitProjectParams) {
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
    imagePath: `${publicFolder}/${slug}.${logo.format}`,
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

  const [markdownBlob, imageBlob] = await Promise.all([
    createBlob(markdownTemplate, 'utf-8'),
    createBlob(logo.base64, 'base64'),
  ])

  const newTree = await createTreeBlobs({
    baseTreeSha: latestCommitOnMain.commit.tree.sha,
    newBlobs: [
      {
        path: `${mediaFolder}/${slug}.${logo.format}`,
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
