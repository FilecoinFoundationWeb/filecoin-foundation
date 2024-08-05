import { Octokit } from '@octokit/rest'

// https://github.com/octokit/octokit.js
// https://octokit.github.io/rest.js/v20/
const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

type SHA = string

type Tree = {
  path: string
  mode: '100644'
  type: 'blob'
  sha: SHA
}

const owner = 'FilecoinFoundationWeb'
const repo = 'filecoin-foundation'
const baseBranch = 'main'

export async function getLatestCommitOnMain() {
  const { data: latestCommitOnMain } = await octokit.rest.repos.getCommit({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  })

  return latestCommitOnMain
}

type CreateBlobParams = {
  content: string
  encoding: 'utf-8' | 'base64'
}

export async function createBlob({ content, encoding }: CreateBlobParams) {
  const { data: blob } = await octokit.rest.git.createBlob({
    owner,
    repo,
    content,
    encoding,
  })

  return blob
}

type CreateTreeParams = {
  baseTreeSha: SHA
  newTrees: Array<Tree>
}

export async function createTree({ baseTreeSha, newTrees }: CreateTreeParams) {
  const { data: newTree } = await octokit.rest.git.createTree({
    owner,
    repo,
    tree: newTrees,
    base_tree: baseTreeSha,
  })

  return newTree
}

type CreateCommitParams = {
  parentCommitSha: SHA
  treeSha: SHA
  message: string
}

export async function createCommit({
  parentCommitSha,
  treeSha,
  message,
}: CreateCommitParams) {
  // TODO: Add signature to commit
  const { data: newCommit } = await octokit.rest.git.createCommit({
    owner,
    repo,
    message,
    tree: treeSha,
    parents: [parentCommitSha],
  })

  return newCommit
}

type CreateBranchParams = {
  commitSha: SHA
  branchName: string
}

async function createBranch({ commitSha, branchName }: CreateBranchParams) {
  const { data: newBranch } = await octokit.rest.git.createRef({
    owner,
    repo,
    ref: `refs/heads/${branchName}`,
    sha: commitSha,
  })

  return newBranch
}

type CreatePRParams = {
  title: string
} & CreateBranchParams

export async function createPR({
  title,
  branchName,
  commitSha,
}: CreatePRParams) {
  await createBranch({ commitSha, branchName })

  const { data: newPullRequest } = await octokit.rest.pulls.create({
    owner,
    repo,
    head: branchName,
    base: baseBranch,
    title,
  })

  return newPullRequest
}
