import { Octokit } from '@octokit/rest'

import { handleError } from '@/utils/handleError'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function createBlob(
  content: string,
  encoding: 'utf-8' | 'base64',
) {
  try {
    const { data: blob } = await octokit.rest.git.createBlob({
      ...repoConfig,
      content,
      encoding,
    })
    return blob
  } catch (error) {
    return handleError(error, 'Error creating blob:')
  }
}
