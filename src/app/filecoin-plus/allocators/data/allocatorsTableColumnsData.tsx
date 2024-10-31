import { createColumnHelper } from '@tanstack/react-table'

import { ApplyLink } from '../components/ApplyLink'
import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

const columnHelper = createColumnHelper<AllocatorWithDatacap>()

export const allocatorsTableColumnsData = [
  columnHelper.accessor('name', {
    header: 'Organization Name',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-72 sm:w-80 lg:w-96',
      bodyCellStyle: 'truncate',
    },
    filterFn: 'includesString',
  }),
  columnHelper.accessor('metapathway_type', {
    header: 'Type',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
    filterFn: 'includesString',
  }),
  columnHelper.accessor('location', {
    header: 'Region',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
    filterFn: 'includesString',
  }),
  columnHelper.accessor('remainingDatacap', {
    header: 'Remaining Datacap',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
    filterFn: 'includesString',
  }),
  columnHelper.accessor('allowance', {
    header: 'Used Datacap',
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-44',
    },
    filterFn: 'includesString',
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
