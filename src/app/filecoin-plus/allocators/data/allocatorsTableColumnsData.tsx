import { createColumnHelper } from '@tanstack/react-table'

import { TableHeaderWithTooltip } from '@/components/Table/TableHeaderWithTooltip'

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
    filterFn: 'includesString',
  }),
  columnHelper.accessor('metapathway_type', {
    header: () => (
      <TableHeaderWithTooltip
        header="Type"
        description="The allocation method used to distribute DataCap to clients."
      />
    ),
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
  columnHelper.accessor('application.required_replicas', {
    header: () => (
      <TableHeaderWithTooltip
        header="Required Replicas"
        description="The minimum number of data copies that must be stored."
      />
    ),
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-52',
    },
  }),
  columnHelper.accessor('application.required_sps', {
    header: () => (
      <TableHeaderWithTooltip
        header="Required SPs"
        description="The minimum number of distinct storage providers needed for data storage."
      />
    ),
    cell: (info) => info.getValue(),
    meta: {
      headerCellStyle: 'w-52',
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
