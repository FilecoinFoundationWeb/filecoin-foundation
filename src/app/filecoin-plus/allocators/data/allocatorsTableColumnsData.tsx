import { createColumnHelper } from '@tanstack/react-table'

import { TooltipHeader } from '@/components/Table/TooltipHeader'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

const columnHelper = createColumnHelper<AllocatorWithDatacap>()

export const allocatorsTableColumnsData = [
  columnHelper.accessor('name', {
    header: 'Organization Name',
    cell: (info) => info.getValue(),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('metapathway_type', {
    header: () => (
      <TooltipHeader
        title="Type"
        description="The allocation method used to distribute DataCap to clients."
      />
    ),
    cell: (info) => info.getValue(),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('location', {
    header: 'Region',
    cell: (info) => info.getValue(),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('remainingDatacap', {
    header: 'Remaining Datacap',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('allowance', {
    header: 'Used Datacap',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('application.required_replicas', {
    header: () => (
      <TooltipHeader
        title="Required Replicas"
        description="The minimum number of data copies that must be stored."
      />
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('application.required_sps', {
    header: () => (
      <TooltipHeader
        title="Required Storage Providers"
        description="The minimum number of distinct storage providers needed for data storage."
      />
    ),
    cell: (info) => info.getValue(),
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
      bodyCellStyle: 'text-brand-300',
    },
    cell: (info) => {
      const link = info.getValue()
      const name = info.row.original.name

      if (!link) {
        return null
      }

      return (
        <ExternalTextLink
          aria-label={`Apply for ${name} allocator`}
          href={link}
        >
          Apply
        </ExternalTextLink>
      )
    },
  }),
]
