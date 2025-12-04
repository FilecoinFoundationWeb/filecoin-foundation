import {
  getAllDigestIssuesData as sharedGetAllDigestIssuesData,
  getDigestIssueData as sharedGetDigestIssueData,
} from '@filecoin-foundation/utils/getDigestIssueData'

import { PATHS } from '@/constants/paths'

const DIGEST_ISSUES_DIRECTORY_PATH = PATHS.DIGEST.issuePath

export async function getDigestIssueData(slug: string) {
  return sharedGetDigestIssueData(slug, DIGEST_ISSUES_DIRECTORY_PATH)
}

export async function getAllDigestIssuesData() {
  return sharedGetAllDigestIssuesData(DIGEST_ISSUES_DIRECTORY_PATH)
}
