import type { EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'

import type { ProjectPreview } from '@/qino/collections/projects'

import {
  filterByCurrentPartnership,
  filterByPastPartnership,
} from '../utils/filterByPartnershipStatus'

export const projectsViewConfigs = [
  {
    id: 'current',
    name: 'Current Partnerships',
    filterOrSortFn: filterByCurrentPartnership,
  },
  {
    id: 'past',
    name: 'Past Partnerships',
    filterOrSortFn: filterByPastPartnership,
  },
] as const satisfies ReadonlyArray<EntryViewConfig<ProjectPreview>>
