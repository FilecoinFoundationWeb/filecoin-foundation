import { Octokit } from '@octokit/rest'

import { handleError } from '@/utils/handleError'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type CreateCommitParams = {
  parentCommitSha: string
  treeSha: string
  message: string
}

export async function createCommit({
  parentCommitSha,
  treeSha,
  message,
}: CreateCommitParams) {
  try {
    const { data: newCommit } = await octokit.rest.git.createCommit({
      ...repoConfig,
      message,
      tree: treeSha,
      parents: [parentCommitSha],
    })
    return newCommit
  } catch (error) {
    return handleError(error, 'Error creating commit:')
  }
}
