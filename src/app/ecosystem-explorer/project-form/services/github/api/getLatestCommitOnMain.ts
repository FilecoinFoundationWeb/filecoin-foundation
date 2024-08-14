import { Octokit } from '@octokit/rest'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function getLatestCommitOnMain() {
  const { data: latestCommitOnMain } = await octokit.rest.repos.getCommit({
    owner: repoConfig.owner,
    repo: repoConfig.repo,
    ref: `heads/${repoConfig.baseBranch}`,
  })
  return latestCommitOnMain
}
