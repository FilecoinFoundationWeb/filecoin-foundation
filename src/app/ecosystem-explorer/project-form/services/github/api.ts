import { Octokit } from '@octokit/rest'

const owner = 'FilecoinFoundationWeb'
const repo = 'filecoin-foundation'
const baseBranch = 'main'

type SHA = string

type Tree = {
  path: string
  mode: '100644'
  type: 'blob'
  sha: SHA
}

type CreateBlobParams = {
  content: string
  encoding: 'utf-8' | 'base64'
}

type CreateTreeParams = {
  baseTreeSha: SHA
  newTrees: Array<Tree>
}

type CreateCommitParams = {
  parentCommitSha: SHA
  treeSha: SHA
  message: string
}

type CreateBranchParams = {
  commitSha: SHA
  branchName: string
}

type CreatePRParams = {
  title: string
} & CreateBranchParams

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function getLatestCommitOnMain() {
  try {
    const { data: latestCommitOnMain } = await octokit.rest.repos.getCommit({
      owner,
      repo,
      ref: `heads/${baseBranch}`,
    })
    return latestCommitOnMain
  } catch (error) {
    console.error('Error fetching the latest commit:', error)
    throw error
  }
}

export async function createBlob({ content, encoding }: CreateBlobParams) {
  try {
    const { data: blob } = await octokit.rest.git.createBlob({
      owner,
      repo,
      content,
      encoding,
    })
    return blob
  } catch (error) {
    console.error('Error creating blob:', error)
    throw error
  }
}

export async function createTree({ baseTreeSha, newTrees }: CreateTreeParams) {
  try {
    const { data: newTree } = await octokit.rest.git.createTree({
      owner,
      repo,
      tree: newTrees,
      base_tree: baseTreeSha,
    })
    return newTree
  } catch (error) {
    console.error('Error creating tree:', error)
    throw error
  }
}

export async function createCommit({
  parentCommitSha,
  treeSha,
  message,
}: CreateCommitParams) {
  try {
    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner,
      repo,
      message,
      tree: treeSha,
      parents: [parentCommitSha],
    })
    return newCommit
  } catch (error) {
    console.error('Error creating commit:', error)
    throw error
  }
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

export async function createPR({
  title,
  branchName,
  commitSha,
}: CreatePRParams) {
  try {
    await createBranch({ commitSha, branchName })
    const { data: newPullRequest } = await octokit.rest.pulls.create({
      owner,
      repo,
      head: branchName,
      base: baseBranch,
      title,
    })
    return newPullRequest
  } catch (error) {
    console.error('Error creating pull request:', error)
    throw error
  }
}
