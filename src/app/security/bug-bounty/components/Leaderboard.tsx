'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { leaderboardData } from '../data/leaderboard'
import { leaderboardTableColumnsData } from '../data/leaderboardTableColumnsData'

export function Leaderboard() {
  const table = useReactTable({
    data: leaderboardData,
    columns: leaderboardTableColumnsData,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Table>
      <TableHead headerGroups={table.getHeaderGroups()} />
      <TableBody rowModel={table.getRowModel()} />
    </Table>
  )
}
