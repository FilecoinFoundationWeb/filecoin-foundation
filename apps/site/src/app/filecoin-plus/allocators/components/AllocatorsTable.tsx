'use client'

import { type HeaderGroup, type RowModel } from '@tanstack/react-table'

import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { type AllocatorWithDatacap } from '../schemas/AllocatorSchema'

type AllocatorsTableProps = {
  headerGroups: Array<HeaderGroup<AllocatorWithDatacap>>
  rowModel: RowModel<AllocatorWithDatacap>
}

export function AllocatorsTable({
  headerGroups,
  rowModel,
}: AllocatorsTableProps) {
  return (
    <Table freezeFirstColumn freezeHeader withBorder>
      <TableHead headerGroups={headerGroups} textColor="text-brand-300" />
      <TableBody rowModel={rowModel} />
    </Table>
  )
}
