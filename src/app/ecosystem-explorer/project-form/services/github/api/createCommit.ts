import { Octokit } from '@octokit/rest'

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
  const { data: newCommit } = await octokit.rest.git.createCommit({
    ...repoConfig,
    message,
    tree: treeSha,
    parents: [parentCommitSha],
  })
  return newCommit
}
