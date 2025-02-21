import { ArrowUpRight } from '@phosphor-icons/react'
import { createColumnHelper } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'
import { TooltipHeader } from '@/components/Table/TooltipHeader'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'
import { formatDatacap } from '../utils/formatDatacap'

const columnHelper = createColumnHelper<AllocatorWithDatacap>()

export const allocatorsTableColumnsData = [
  columnHelper.accessor('name', {
    header: 'Organization Name',
    cell: (info) => {
      const name = info.getValue()
      const link = info.row.original.application.allocation_bookkeeping

      return (
        <div className="w-[200px]">
          {link ? (
            <a
              aria-label={`See more information about ${name} allocator`}
              href={link}
              title={name}
              className="group flex items-center focus:brand-outline hover:text-brand-300 hover:underline focus:text-brand-300"
              rel="noopener noreferrer"
            >
              <span className="block truncate text-brand-100 group-hover:text-inherit group-focus:text-inherit">
                {name}
              </span>
              <span className="ml-2 inline-flex self-center text-brand-300">
                <Icon component={ArrowUpRight} size={18} />
              </span>
            </a>
          ) : (
            <p title={name} className="truncate text-brand-100">
              {name}
            </p>
          )}
        </div>
      )
    },
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
  columnHelper.accessor('availableDatacap', {
    header: 'Remaining Datacap',
    cell: (info) => formatDatacap(info.getValue()),
  }),
  columnHelper.accessor('usedDatacap', {
    header: 'Used Datacap',
    cell: (info) => formatDatacap(info.getValue()),
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
]
