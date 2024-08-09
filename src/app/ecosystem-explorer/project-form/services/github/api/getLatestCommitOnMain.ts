import { Octokit } from '@octokit/rest'

import { handleError } from '@/utils/handleError'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function getLatestCommitOnMain() {
  try {
    const { data: latestCommitOnMain } = await octokit.rest.repos.getCommit({
      ...repoConfig,
      ref: `heads/${repoConfig.baseBranch}`,
    })
    return latestCommitOnMain
  } catch (error) {
    return handleError(error, 'Error fetching the latest commit:')
  }
}
