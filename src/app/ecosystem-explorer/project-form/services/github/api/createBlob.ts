import { Octokit } from '@octokit/rest'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function createBlob(
  content: string,
  encoding: 'utf-8' | 'base64',
) {
  const { data: blob } = await octokit.rest.git.createBlob({
    owner: repoConfig.owner,
    repo: repoConfig.repo,
    content,
    encoding,
  })
  return blob
}
