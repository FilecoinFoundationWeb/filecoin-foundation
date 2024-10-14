'use server'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getEcosystemProjectData } from '@/utils/getEcosystemProjectData'

export async function getProjectData(slug: EcosystemProject['slug']) {
  return getEcosystemProjectData(slug)
}
