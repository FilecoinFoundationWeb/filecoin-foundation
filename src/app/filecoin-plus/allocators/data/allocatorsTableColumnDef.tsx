import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { createColumnHelper } from '@tanstack/react-table'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import type { Allocator } from '../schemas/AllocatorSchema'

const columnHelper = createColumnHelper<Allocator>()

export const allocatorsTableColumnDef = [
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
  columnHelper.accessor('application.required_replicas', {
    header: 'Required Replicas',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('application.required_sps', {
    header: 'Required SPs',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('application.allocation_bookkeeping', {
    header: 'Apply',
    meta: {
      bodyCellStyle: 'text-center text-brand-300',
    },
    cell: (info) => {
      const link = info.getValue()
      const name = info.row.original.name

      if (!link) {
        return null
      }

      return (
        <CustomLink
          href={link}
          className="inline-flex items-center justify-center gap-2 focus:brand-outline"
          aria-label={`Apply for ${name} allocator`}
        >
          <span>Apply</span>
          <Icon component={ArrowUpRight} size={20} />
        </CustomLink>
      )
    },
  }),
]
