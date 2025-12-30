import { getDigestArticlesWithIssueContext as sharedGetDigestArticlesWithIssueContext } from '@filecoin-foundation/utils/getDigestArticlesWithIssueContext'
import type { DigestIssueFrontmatter } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { PATHS } from '@/constants/paths'

export async function getDigestArticlesWithIssueContext(
  issueNumber: DigestIssueFrontmatter['issue-number'],
) {
  return sharedGetDigestArticlesWithIssueContext({
    issueNumber,
    directoryPath: PATHS.DIGEST.articlesPath,
  })
}
