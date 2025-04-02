
import { type SortConfig } from '@filecoin-foundation/hooks/useSort/types'

import { type EcosystemProject } from '../types/ecosystemProjectType'

import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/ecosystem-explorer/utils/sortEcosystemProjects'

export const ecosystemProjectsSortConfigs = [
  {
    id: 'a-z',
    name: 'Alphabetical (A-Z)',
    sortFn: sortEcosystemProjectsAlphabeticalAsc,
  },
  {
    id: 'z-a',
    name: 'Alphabetical (Z-A)',
    sortFn: sortEcosystemProjectsAlphabeticalDesc,
  },
] as const satisfies ReadonlyArray<SortConfig<EcosystemProject>>
