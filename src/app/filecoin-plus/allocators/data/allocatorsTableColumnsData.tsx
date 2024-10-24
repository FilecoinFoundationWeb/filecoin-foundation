import { createColumnHelper } from '@tanstack/react-table'

import { ApplyLink } from '../components/ApplyLink'
import type { Allocator } from '../schemas/AllocatorSchema'

const columnHelper = createColumnHelper<Allocator>()

export const allocatorsTableColumnsData = [
  columnHelper.accessor('name', {
    header: 'Organization Name',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-72 sm:w-80 lg:w-96',
      bodyCellStyle: 'truncate',
    },
  }),
  columnHelper.accessor('metapathway_type', {
    header: 'Type',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
  }),
  columnHelper.accessor('location', {
    header: 'Region',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
  }),
  columnHelper.accessor('application.required_replicas', {
    header: 'Required Replicas',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
  }),
  columnHelper.accessor('application.required_sps', {
    header: 'Required SPs',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
  }),
  columnHelper.accessor('application.allocation_bookkeeping', {
    header: 'Apply',
    meta: {
      headerCellStyle: 'w-32',
      bodyCellStyle: 'text-brand-300',
    },
    enableGlobalFilter: false,
    cell: (info) => {
      const link = info.getValue()
      const name = info.row.original.name

      if (!link) {
        return null
      }

      return <ApplyLink link={link} name={name} />
    },
  }),
]
