import {
  getAllDigestIssuesData as sharedGetAllDigestIssuesData,
  getDigestIssueData as sharedGetDigestIssueData,
} from '@filecoin-foundation/utils/getDigestIssueData'
import type { DigestIssueFrontmatter } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { PATHS } from '@/constants/paths'

export async function getDigestIssueData(
  issueNumber: DigestIssueFrontmatter['issue-number'],
) {
  return sharedGetDigestIssueData(issueNumber, PATHS.DIGEST.issuePath)
}

export async function getAllDigestIssuesData() {
  return sharedGetAllDigestIssuesData(PATHS.DIGEST.issuePath)
}
