import {
  sortEcosystemProjectsAlphabeticalAsc,
  sortEcosystemProjectsAlphabeticalDesc,
} from '@/utils/sortEcosystemProjects'

export const ecosystemProjectsSortData = [
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
