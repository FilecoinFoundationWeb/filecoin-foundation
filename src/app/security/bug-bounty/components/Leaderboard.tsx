'use client'

import { GithubLogo, Globe, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import {
  createColumnHelper,
  flexRender as render,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'

import { leaderboard, type Person } from '../data/leaderboard'

const columnHelper = createColumnHelper<Person>()

const columnIds = {
  rank: 'rank',
  reporter: 'reporter',
  points: 'points',
  link: 'profileLink',
}

const profileLinkLogos = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  twitter: XLogo,
  website: Globe,
}

const tableRowStyle = 'h-12'
const tableCellStyle =
  'px-4 sm:px-5 sm:first:pl-10 sm:last:pr-10 text-nowrap font-light first:pl-8 last:pr-8'

const columns = [
  columnHelper.accessor('reporter', {
    id: columnIds.rank,
    header: '#',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('reporter', {
    id: columnIds.reporter,
    header: 'Reporter',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('points', {
    id: columnIds.points,
    header: 'Total Points',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('profileLink', {
    id: columnIds.link,
    header: 'Profile Link',
    cell: (info) => {
      const profileLink = info.getValue()
      const reporter = info.row.original.reporter

      if (!profileLink) {
        return null
      }

      const hostname = getWebsiteLabel(profileLink)
      const Logo = profileLinkLogos[hostname]

      return (
        <a
          href={profileLink}
          rel="noopener noreferrer"
          className="inline-flex size-12 items-center justify-center"
          aria-label={`Visit ${reporter}'s GitHub profile`}
        >
          <Icon component={Logo} size={20} />
        </a>
      )
    },
  }),
]

export function Leaderboard() {
  const table = useReactTable({
    data: leaderboard,
    columns,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const headerGroups = table.getHeaderGroups()
  const rows = table.getRowModel().rows

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { id, headers } = headerGroup

            return (
              <tr key={id} className={tableRowStyle}>
                {headers.map((header) => {
                  const { id } = header.column.columnDef

                  return (
                    <th
                      key={header.id}
                      className={clsx(
                        tableCellStyle,
                        id === columnIds.reporter && 'sm:min-w-72',
                        id === columnIds.points && 'w-full',
                      )}
                    >
                      {render(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>

        <tbody className="border-t border-brand-500">
          {rows.map((row) => {
            return (
              <tr
                key={row.id}
                className={clsx(tableRowStyle, 'odd:bg-brand-700')}
              >
                {row.getVisibleCells().map((cell) => {
                  const { id: columnId } = cell.column.columnDef

                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        tableCellStyle,
                        columnId === columnIds.reporter && 'text-brand-300',
                        columnId === columnIds.link &&
                          'text-center text-brand-300',
                      )}
                    >
                      {render(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function getWebsiteLabel(url: string) {
  const hostname = new URL(url).hostname

  if (hostname.includes('linkedin.com')) {
    return 'linkedin'
  }

  if (hostname.includes('x.com')) {
    return 'x'
  }

  if (hostname.includes('github.com')) {
    return 'github'
  }

  if (hostname.includes('twitter.com')) {
    return 'twitter'
  }

  return 'website'
}
