import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { createColumnHelper } from '@tanstack/react-table'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import type { AllocatorProps } from '../components/AllocatorsTable'

const columnHelper = createColumnHelper<AllocatorProps>()

export function AllocatorsTableColumns() {
  return [
    columnHelper.accessor('name', {
      header: 'Organization Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('region', {
      header: 'Region',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('requiredReplicas', {
      header: 'Required Replicas',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('requiredSps', {
      header: 'Required SPs',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('apply', {
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
}
