import { createColumnHelper } from '@tanstack/react-table'

import { SocialIconLink } from '../components/SocialIconLink'
import type { WhiteHat } from '../types'
import { getLogoFromLink } from '../utils/getLogoFromLink'

const columnHelper = createColumnHelper<WhiteHat>()

export const leaderboardTableColumnsData = [
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
    cell: (info) => {
      const profileLink = info.getValue()
      const reporter = info.row.original.reporter

      if (!profileLink) {
        return null
      }

      const logo = getLogoFromLink(profileLink)

      return (
        <SocialIconLink
          profileLink={profileLink}
          reporter={reporter}
          logo={logo}
        />
      )
    },
  }),
]
