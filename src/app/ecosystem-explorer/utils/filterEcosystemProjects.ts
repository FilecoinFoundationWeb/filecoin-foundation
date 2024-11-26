import type { CategoryId } from '@/types/categoryTypes'

import type { EcosystemProject } from '../types/ecosystemProjectType'

export function filterEcosystemProjectByCategory(
  ecosystemProject: EcosystemProject,
  categoryId?: CategoryId,
) {
  return ecosystemProject.category === categoryId
}
