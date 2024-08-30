'use client'

import { GithubLogo, Globe, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import {
  createColumnHelper,
  flexRender as render,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  type HeaderGroup,
  type RowData,
  type RowModel,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'

import { leaderboard, type WhiteHat } from '../data/leaderboard'

const columnHelper = createColumnHelper<WhiteHat>()

const profileLinkLogos = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  twitter: XLogo,
  website: Globe,
}

const columnDefinitions = [
  columnHelper.accessor('reporter', {
    id: 'rank',
    header: '#',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('reporter', {
    id: 'reporter',
    header: 'Reporter',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'sm:min-w-72',
      bodyCellStyle: 'text-brand-300',
    },
  }),
  columnHelper.accessor('points', {
    id: 'points',
    header: 'Total Points',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-full',
    },
  }),
  columnHelper.accessor('profileLink', {
    id: 'profileLink',
    header: 'Profile Link',
    cell: (info) => {
      const profileLink = info.getValue()
      const reporter = info.row.original.reporter

      if (!profileLink) {
        return null
      }

      const label = getProfileLinkLabel(profileLink)
      const Logo = profileLinkLogos[label]

      return (
        <a
          href={profileLink}
          rel="noopener noreferrer"
          className="inline-flex size-12 items-center justify-center"
          aria-label={`Visit ${reporter}'s profile`}
        >
          <Icon component={Logo} size={20} />
        </a>
      )
    },
    meta: {
      bodyCellStyle: 'text-center text-brand-300',
    },
  }),
]

const ROW_HEIGHT = 'h-[52px]'

const sharedCellStyle = 'px-5 text-nowrap font-light first:pl-10 last:pr-10'

export function Leaderboard() {
  const table = useReactTable({
    data: leaderboard,
    columns: columnDefinitions,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableRows rowModel={table.getRowModel()} />
      </table>
    </div>
  )
}

type TableHeaderProps<Data extends RowData> = {
  headerGroups: Array<HeaderGroup<Data>>
}

function TableHeader<Data extends RowData>({
  headerGroups,
}: TableHeaderProps<Data>) {
  const firstHeaderGroup = headerGroups[0]
  const { headers } = firstHeaderGroup

  return (
    <thead>
      <tr className={ROW_HEIGHT}>
        {headers.map((header) => {
          const { meta } = header.column.columnDef

          return (
            <th
              key={header.id}
              className={clsx(sharedCellStyle, meta?.headerCellStyle)}
            >
              {render(header.column.columnDef.header, header.getContext())}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

type TableRowsProps<Data extends RowData> = {
  rowModel: RowModel<Data>
}

function TableRows<Data extends RowData>({ rowModel }: TableRowsProps<Data>) {
  const { rows } = rowModel

  return (
    <tbody className="border-t border-brand-500">
      {rows.map((row) => (
        <tr key={row.id} className={clsx(ROW_HEIGHT, 'odd:bg-brand-700')}>
          {row.getVisibleCells().map((cell) => {
            const { meta } = cell.column.columnDef

            return (
              <td
                key={cell.id}
                className={clsx(sharedCellStyle, meta?.bodyCellStyle)}
              >
                {render(cell.column.columnDef.cell, cell.getContext())}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}

function getProfileLinkLabel(url: string) {
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
