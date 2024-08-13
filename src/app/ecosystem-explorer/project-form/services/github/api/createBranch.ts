import { Octokit } from '@octokit/rest'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type CreateBranchParams = {
  commitSha: string
  branchName: string
}

export async function createBranch({
  commitSha,
  branchName,
}: CreateBranchParams) {
  const { data: newBranch } = await octokit.rest.git.createRef({
    ...repoConfig,
    ref: `refs/heads/${branchName}`,
    sha: commitSha,
  })
  return newBranch
}
