import {
  getAllDigestIssuesData as sharedGetAllDigestIssuesData,
  getDigestIssueData as sharedGetDigestIssueData,
} from '@filecoin-foundation/utils/getDigestIssueData'

import { PATHS } from '@/constants/paths'

export async function getDigestIssueData(slug: string) {
  console.log('slug', slug)
  return sharedGetDigestIssueData(slug, PATHS.DIGEST.issuePath)
}

export async function getAllDigestIssuesData() {
  return sharedGetAllDigestIssuesData(PATHS.DIGEST.issuePath)
}
