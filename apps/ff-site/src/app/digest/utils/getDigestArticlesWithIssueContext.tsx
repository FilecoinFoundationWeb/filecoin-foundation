import { getDigestArticlesWithIssueContext as sharedGetDigestArticlesWithIssueContext } from '@filecoin-foundation/utils/getDigestArticlesWithIssueContext'

import { PATHS } from '@/constants/paths'

const DIGEST_DIRECTORY_ARTICLES_PATH = PATHS.DIGEST.articlesPath

export async function getDigestArticlesWithIssueContext(issueNumber: string) {
  return sharedGetDigestArticlesWithIssueContext({
    issueNumber,
    directoryPath: DIGEST_DIRECTORY_ARTICLES_PATH,
  })
}
