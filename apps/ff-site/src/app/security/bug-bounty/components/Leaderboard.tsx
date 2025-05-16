'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'

import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { leaderboardData } from '../data/leaderboard'
import { leaderboardTableColumnsData } from '../data/leaderboardTableColumnsData'

type LeaderboardProps = {
  limit?: number
}

export function Leaderboard({ limit }: LeaderboardProps) {
  const table = useReactTable({
    data: leaderboardData,
    columns: leaderboardTableColumnsData,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
      ...(limit && { pagination: { pageSize: limit } }),
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(limit && { getPaginationRowModel: getPaginationRowModel() }),
  })

  return (
    <Table>
      <TableHead headerGroups={table.getHeaderGroups()} />
      <TableBody rowModel={table.getRowModel()} />
    </Table>
  )
}
