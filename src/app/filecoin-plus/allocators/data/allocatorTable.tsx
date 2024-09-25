import { createColumnHelper } from '@tanstack/react-table'

import type { AllocatorProps } from '../components/AllocatorsList'

const columnHelper = createColumnHelper<AllocatorProps>()

export function mapAllocatorsToTableData() {
  return [
    columnHelper.accessor('name', {
      header: 'Organization Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('metapathway_type', {
      header: 'Type',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('location', {
      header: 'Region',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('required_replicas', {
      header: 'Required Replicas',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('required_sps', {
      header: 'Required SPs',
      cell: (info) => info.getValue(),
    }),
  ]
}
