import type { ValidSortKey } from '@/types/sortTypes'

import type { EcosystemProject } from '../types/ecosystemProjectType'

export function sortEcosystemProjectsAlphabeticalAsc(
  projects: Array<EcosystemProject>,
) {
  return sortEcosystemProjectsAlphabetical(projects, 'a-z')
}

export function sortEcosystemProjectsAlphabeticalDesc(
  projects: Array<EcosystemProject>,
) {
  return sortEcosystemProjectsAlphabetical(projects, 'z-a')
}

function sortEcosystemProjectsAlphabetical(
  projects: Array<EcosystemProject>,
  sortBy: Extract<ValidSortKey, 'a-z' | 'z-a'>,
) {
  return [...projects].sort((a, b) => {
    const titleA = a.title.toLowerCase()
    const titleB = b.title.toLowerCase()

    switch (sortBy) {
      case 'a-z':
        return titleA.localeCompare(titleB)
      case 'z-a':
        return titleB.localeCompare(titleA)
      default:
        return 0
    }
  })
}
