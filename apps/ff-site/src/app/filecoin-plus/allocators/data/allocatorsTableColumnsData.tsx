import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { createColumnHelper } from '@tanstack/react-table'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { PopoverHeader } from '@/components/Table/PopoverHeader'

import type { AllocatorWithDatacap } from '../schemas/AllocatorWithDatacapSchema'
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
              className="group hover:text-brand-300 focus:brand-outline focus:text-brand-300 flex items-center hover:underline"
              rel="noopener noreferrer"
            >
              <span className="text-brand-100 block truncate group-hover:text-inherit group-focus:text-inherit">
                {name}
              </span>
              <span className="text-brand-300 ml-2 inline-flex self-center">
                <Icon component={ArrowUpRightIcon} size={18} />
              </span>
            </a>
          ) : (
            <p title={name} className="text-brand-100 truncate">
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
      <PopoverHeader
        title="Type"
        description="The allocation method used to distribute DataCap to clients."
      />
    ),
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
      <PopoverHeader
        title="Required Replicas"
        description="The minimum number of data copies that must be stored."
      />
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('application.required_sps', {
    header: () => (
      <PopoverHeader
        title="Required Storage Providers"
        description="The minimum number of distinct storage providers needed for data storage."
      />
    ),
    cell: (info) => info.getValue(),
  }),
]
