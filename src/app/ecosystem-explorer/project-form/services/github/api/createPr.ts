import { Octokit } from '@octokit/rest'

import { repoConfig } from '../config/repoConfig'

import { createBranch } from './createBranch'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type CreatePRParams = {
  title: string
  branchName: string
  commitSha: string
}

export async function createPR({
  title,
  branchName,
  commitSha,
}: CreatePRParams) {
  await createBranch({ commitSha, branchName })

  const { data: newPullRequest } = await octokit.rest.pulls.create({
    owner: repoConfig.owner,
    repo: repoConfig.repo,
    head: branchName,
    base: repoConfig.baseBranch,
    title,
  })
  return newPullRequest
}
