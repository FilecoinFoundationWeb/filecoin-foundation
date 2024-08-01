'use server'

import slugify from 'slugify'

import {
  getLatestCommitOnMain,
  createBlob,
  createTree,
  createCommit,
  createPR,
} from './api'
import {
  getFolderPaths,
  getMarkdownTemplate,
  getTodayISO,
  type AllowedImageFormats,
} from './utils'

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

  try {
    const latestCommitOnMain = await getLatestCommitOnMain()

    const [markdownBlob, imageBlob] = await Promise.all([
      createBlob({ content: markdownTemplate, encoding: 'utf-8' }),
      createBlob({ content: logo.base64, encoding: 'base64' }),
    ])

    const newTree = await createTree({
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
  } catch (error) {
    console.error(error)
    throw new Error(String(error))
  }
}
