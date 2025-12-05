import type {
  getAllDigestArticlesWithIssueContextProps as sharedGetAllDigestArticlesWithIssueContextProps,
  getDigestArticleWithIssueContextProps as sharedGetDigestArticleWithIssueContextProps,
} from '@filecoin-foundation/utils/getDigestArticleDataWithIssueContext'
import {
  getAllDigestArticlesWithIssueContext as sharedGetAllDigestArticlesWithIssueContext,
  getDigestArticleWithIssueContext as sharedGetDigestArticleWithIssueContext,
} from '@filecoin-foundation/utils/getDigestArticleDataWithIssueContext'

import { PATHS } from '@/constants/paths'

const DIGEST_ARTICLES_DIRECTORY_PATH = PATHS.DIGEST.articlesPath

type getDigestArticleWithIssueContextProps = Omit<
  sharedGetDigestArticleWithIssueContextProps,
  'articleDirectoryPath'
>

export async function getDigestArticleWithIssueContext({
  articleSlug,
  digestIssue,
}: getDigestArticleWithIssueContextProps) {
  return sharedGetDigestArticleWithIssueContext({
    articleSlug,
    digestIssue,
    articleDirectoryPath: DIGEST_ARTICLES_DIRECTORY_PATH,
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
