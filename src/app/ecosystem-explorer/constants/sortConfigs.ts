import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/ecosystem-explorer/utils/sortEcosystemProjects'

export const ecosystemProjectsSortConfigs = [
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
