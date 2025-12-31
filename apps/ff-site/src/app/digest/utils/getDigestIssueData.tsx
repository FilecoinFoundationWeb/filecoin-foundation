import {
  getDigestIssuesData as sharedGetAllDigestIssuesData,
  getDigestIssueData as sharedGetDigestIssueData,
} from '@filecoin-foundation/utils/getDigestIssueData'
import type { DigestIssueFrontmatter } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { PATHS } from '@/constants/paths'

export async function getDigestIssueData(
  issueNumber: DigestIssueFrontmatter['issue-number'],
) {
  return sharedGetDigestIssueData(issueNumber, PATHS.DIGEST.issuesContentPath)
}

export async function getDigestIssuesData() {
  return sharedGetAllDigestIssuesData(PATHS.DIGEST.issuesContentPath)
}
