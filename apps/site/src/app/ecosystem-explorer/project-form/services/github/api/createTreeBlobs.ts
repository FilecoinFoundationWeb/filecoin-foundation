import { Octokit, type RestEndpointMethodTypes } from '@octokit/rest'

import { repoConfig } from '../repoConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type Tree =
  RestEndpointMethodTypes['git']['createTree']['parameters']['tree'][number]

type BlobTree = {
  mode: '100644',
  path: Tree['path'],
  sha: Tree['sha'],
  type: 'blob'
}

type CreateTreeParams = {
  baseTreeSha: string
  newBlobs: Array<Pick<BlobTree, 'path' | 'sha'>>
}

export async function createTreeBlobs({
  baseTreeSha,
  newBlobs,
}: CreateTreeParams) {
  const { data: newTree } = await octokit.rest.git.createTree({
    owner: repoConfig.owner,
    repo: repoConfig.repo,
    base_tree: baseTreeSha,
    tree: newBlobs.map((blob) => ({
      path: blob.path,
      mode: '100644',
      type: 'blob',
      sha: blob.sha,
    })),
  })
  return newTree
}
