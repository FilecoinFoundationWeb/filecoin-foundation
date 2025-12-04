import type {
  getAllDigestArticlesWithIssueContextProps as sharedGetAllDigestArticlesWithIssueContextProps,
  getDigestArticleWithIssueContextProps as sharedGetDigestArticleWithIssueContextProps,
} from '@filecoin-foundation/utils/getDigestArticleDataWithIssueContext'
import {
  getAllDigestArticlesWithIssueContext as sharedGetAllDigestArticlesWithIssueContext,
  getDigestArticleWithIssueContext as sharedGetDigestArticleWithIssueContext,
} from '@filecoin-foundation/utils/getDigestArticleDataWithIssueContext'

import { PATHS } from '@/constants/paths'

const DIGEST_ISSUES_DIRECTORY_PATH = PATHS.DIGEST.issuePath
const DIGEST_ARTICLES_DIRECTORY_PATH = PATHS.DIGEST.articlesPath

type getDigestArticleWithIssueContextProps = Omit<
  sharedGetDigestArticleWithIssueContextProps,
  'articleDirectoryPath' | 'issueDirectoryPath'
>

export async function getDigestArticleWithIssueContext({
  articleSlug,
  articleIssueNumber,
}: getDigestArticleWithIssueContextProps) {
  return sharedGetDigestArticleWithIssueContext({
    articleSlug,
    articleIssueNumber,
    articleDirectoryPath: DIGEST_ARTICLES_DIRECTORY_PATH,
    issueDirectoryPath: DIGEST_ISSUES_DIRECTORY_PATH,
  })
}

type getAllDigestArticlesWithIssueContextProps = Omit<
  sharedGetAllDigestArticlesWithIssueContextProps,
  'articleDirectoryPath'
>

export async function getAllDigestArticlesWithIssueContext({
  digestIssue,
}: getAllDigestArticlesWithIssueContextProps) {
  return sharedGetAllDigestArticlesWithIssueContext({
    digestIssue,
    articleDirectoryPath: DIGEST_ARTICLES_DIRECTORY_PATH,
  })
}
