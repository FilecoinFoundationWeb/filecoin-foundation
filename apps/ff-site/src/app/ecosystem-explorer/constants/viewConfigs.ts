import { type EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'

import { type EcosystemProject } from '../types/ecosystemProjectType'

import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/ecosystem-explorer/utils/sortEcosystemProjects'

export const ecosystemProjectsViewConfigs = [
  {
    id: 'a-z',
    name: 'Alphabetical (A-Z)',
    filterOrSortFn: sortEcosystemProjectsAlphabeticalAsc,
  },
  {
    id: 'z-a',
    name: 'Alphabetical (Z-A)',
    filterOrSortFn: sortEcosystemProjectsAlphabeticalDesc,
  },
] as const satisfies ReadonlyArray<EntryViewConfig<EcosystemProject>>
