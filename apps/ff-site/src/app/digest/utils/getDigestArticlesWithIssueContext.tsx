import { getDigestArticlesWithIssueContext as sharedGetDigestArticlesWithIssueContext } from '@filecoin-foundation/utils/getDigestArticlesWithIssueContext'

import { PATHS } from '@/constants/paths'

export async function getDigestArticlesWithIssueContext(issueNumber: number) {
  return sharedGetDigestArticlesWithIssueContext({
    issueNumber,
    directoryPath: PATHS.DIGEST.articlesPath,
  })
}
