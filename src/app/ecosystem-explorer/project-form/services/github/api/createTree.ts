import { Octokit } from '@octokit/rest'

import { handleError } from '@/utils/handleError'

import { repoConfig } from '../config/repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type Tree = {
  path: string
  mode: '100644'
  type: 'blob'
  sha: string
}

type CreateTreeParams = {
  baseTreeSha: string
  newTrees: Array<Tree>
}

export async function createTree({ baseTreeSha, newTrees }: CreateTreeParams) {
  try {
    const { data: newTree } = await octokit.rest.git.createTree({
      ...repoConfig,
      tree: newTrees,
      base_tree: baseTreeSha,
    })
    return newTree
  } catch (error) {
    return handleError(error, 'Error creating tree:')
  }
}
