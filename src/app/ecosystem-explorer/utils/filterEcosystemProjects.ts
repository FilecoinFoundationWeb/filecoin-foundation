import type { CategoryId } from '@/types/categoryTypes'

import type { EcosystemProject } from '../types/ecosystemProjectType'

export function filterEcosystemProjectsByCategory(
  ecosystemProjects: Array<EcosystemProject>,
  categoryId?: CategoryId,
) {
  return ecosystemProjects.filter((project) => project.category === categoryId)
}
