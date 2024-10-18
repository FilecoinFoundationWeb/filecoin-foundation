'use client'

import { type HeaderGroup, type RowModel } from '@tanstack/react-table'

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
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <TableHead headerGroups={headerGroups} textColor="text-brand-300" />
        <TableBody rowModel={rowModel} />
      </table>
    </div>
  )
}
