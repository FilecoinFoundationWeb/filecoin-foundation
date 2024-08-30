'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { leaderboardData } from '../data/leaderboard'
import { leaderboardTableData } from '../data/leaderboardTable'

import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

export function Leaderboard() {
  const table = useReactTable({
    data: leaderboardData,
    columns: leaderboardTableData,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <TableHead headerGroups={table.getHeaderGroups()} />
        <TableBody rowModel={table.getRowModel()} />
      </table>
    </div>
  )
}
