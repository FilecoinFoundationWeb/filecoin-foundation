import {
  getAllDigestIssuesData as sharedGetAllDigestIssuesData,
  getDigestIssueData as sharedGetDigestIssueData,
} from '@filecoin-foundation/utils/getDigestIssueData'

import { PATHS } from '@/constants/paths'

export async function getDigestIssueData(issueNumber: number) {
  return sharedGetDigestIssueData(issueNumber, PATHS.DIGEST.issuesPath)
}

export async function getAllDigestIssuesData() {
  return sharedGetAllDigestIssuesData(PATHS.DIGEST.issuesPath)
}
