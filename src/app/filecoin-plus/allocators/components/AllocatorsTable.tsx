'use client'

import { type HeaderGroup, type RowModel } from '@tanstack/react-table'

import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { type Allocator } from '../schemas/AllocatorSchema'

type AllocatorsTableProps = {
  headerGroups: Array<HeaderGroup<Allocator>>
  rowModel: RowModel<Allocator>
}

export function AllocatorsTable({
  headerGroups,
  rowModel,
}: AllocatorsTableProps) {
  return (
    <Table>
      <TableHead headerGroups={headerGroups} textColor="text-brand-300" />
      <TableBody rowModel={rowModel} />
    </Table>
  )
}
