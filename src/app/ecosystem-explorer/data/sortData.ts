import type { EcosystemProject } from '@/types/ecosystemProjectType'
import type { SortConfig } from '@/types/sortTypes'

import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/utils/sortEcosystemProjects'

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
