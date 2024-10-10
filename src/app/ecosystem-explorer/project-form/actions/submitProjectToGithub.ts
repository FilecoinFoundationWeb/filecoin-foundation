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
}

export async function submitProjectToGithub({
  slug,
  markdownTemplate,
  logo,
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
    title: `Ecosystem Project Form Submission: ${slug}`,
    commitSha: newCommit.sha,
    branchName,
  })

  return newPullRequest
}

// const markdownTemplate = getEcosystemMarkdownTemplate({
//   encryptedEmail: encrypt(data.email),
//   encryptedName: encrypt(data.name),
//   projectName: projectName,
//   imagePath: `${assetsFolder}/${slug}.${formattedLogo.format}`,
//   category: data.category,
//   subcategories: data.subcategories,
//   tech: data.tech,
//   shortDescription: data.shortDescription,
//   longDescription: data.longDescription,
//   yearJoined: data.yearJoinedISO,
//   websiteUrl: data.websiteUrl,
//   youtubeUrl: data.youtubeEmbedUrl,
//   githubUrl: data.githubUrl,
//   xUrl: data.xUrl,
//   createdOn: data.timestampISO,
//   updatedOn: data.timestampISO,
//   publishedOn: data.timestampISO,
// })

// import {
//   getEcosystemMarkdownTemplate,
//   type MarkdownTemplateParams,
// } from '../utils/getEcosystemMarkdownTemplate'

// type ProjectData = {
//   name: string
//   email: string
//   timestampISO: string
//   yearJoinedISO: string
//   projectName: MarkdownTemplateParams['projectName']
//   category: MarkdownTemplateParams['category']
//   subcategories: MarkdownTemplateParams['subcategories']
//   tech: MarkdownTemplateParams['tech']
//   shortDescription: MarkdownTemplateParams['shortDescription']
//   longDescription: MarkdownTemplateParams['longDescription']
//   websiteUrl: MarkdownTemplateParams['websiteUrl']
//   youtubeEmbedUrl: MarkdownTemplateParams['youtubeUrl']
//   githubUrl: MarkdownTemplateParams['githubUrl']
//   xUrl: MarkdownTemplateParams['xUrl']
// }

// type ProjectLogo = {
//   base64: string
//   format: AllowedImageFormats
// }
