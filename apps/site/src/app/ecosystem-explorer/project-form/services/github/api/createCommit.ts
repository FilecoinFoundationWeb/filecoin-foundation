import { Octokit } from '@octokit/rest'

import { repoConfig } from '../repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type CreateCommitParams = {
  message: string,
  parentCommitSha: string,
  treeSha: string
}

export async function createCommit({
  parentCommitSha,
  treeSha,
  message,
}: CreateCommitParams) {
  const { data: newCommit } = await octokit.rest.git.createCommit({
    owner: repoConfig.owner,
    repo: repoConfig.repo,
    message,
    tree: treeSha,
    parents: [parentCommitSha],
  })
  return newCommit
}
