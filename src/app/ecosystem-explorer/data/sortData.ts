import type { SortConfig } from '@/types/sortTypes'

import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/utils/sortEcosystemProjects'

import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

export const ecosystemProjectsSortData: ReadonlyArray<
  SortConfig<EcosystemProject>
> = [
  {
    key: 'a-z',
    label: 'Alphabetical (A-Z)',
    sortFn: sortEcosystemProjectsAlphabeticalAsc,
  },
  {
    key: 'z-a',
    label: 'Alphabetical (Z-A)',
    sortFn: sortEcosystemProjectsAlphabeticalDesc,
  },
] as const
