'use server'

import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'

export async function getProjectListData() {
  return getEcosystemProjectsData()
}
