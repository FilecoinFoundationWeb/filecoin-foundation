'use server'

import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'

export async function getProjectsData() {
  return getEcosystemProjectsData()
}
