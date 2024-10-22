'use client'

import { GithubLogo, Globe, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import { createColumnHelper } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'

import { leaderboardData } from './leaderboard'

type WhiteHat = (typeof leaderboardData)[number]

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
    cell: (info) => {
      const profileLink = info.getValue()
      const reporter = info.row.original.reporter

      if (!profileLink) {
        return null
      }

      const Logo = getProfileLinkLogo(profileLink)

      return (
        <a
          href={profileLink}
          rel="noopener noreferrer"
          className="inline-flex size-12 items-center justify-center focus:brand-outline"
          aria-label={`Visit ${reporter}'s profile`}
        >
          <Icon component={Logo} size={20} />
        </a>
      )
    },
  }),
]

function getProfileLinkLogo(url: string) {
  const { hostname } = new URL(url)

  if (hostname.includes('linkedin.com')) {
    return LinkedinLogo
  }

  if (hostname.includes('x.com') || hostname.includes('twitter.com')) {
    return XLogo
  }

  if (hostname.includes('github.com')) {
    return GithubLogo
  }

  return Globe
}
