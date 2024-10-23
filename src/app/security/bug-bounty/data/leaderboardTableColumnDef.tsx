import { createColumnHelper } from '@tanstack/react-table'

import { SocialIconLink } from '../components/SocialIconLink'
import type { WhiteHat } from '../types'

const columnHelper = createColumnHelper<WhiteHat>()

export const leaderboardTableColumnDef = [
  columnHelper.accessor('reporter', {
    id: 'rank',
    header: '#',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('reporter', {
    id: 'reporter',
    header: 'Reporter',
    meta: {
      headerCellStyle: 'sm:min-w-72',
      bodyCellStyle: 'text-brand-300',
    },
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('points', {
    id: 'points',
    header: 'Total Points',
    meta: {
      headerCellStyle: 'w-full',
    },
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('profileLink', {
    id: 'profileLink',
    header: 'Profile Link',
    meta: {
      bodyCellStyle: 'text-center text-brand-300',
    },
    cell: SocialIconLink,
  }),
]
