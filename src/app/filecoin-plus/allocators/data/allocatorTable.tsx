'use client'

import { Inconsolata } from 'next/font/google'

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { createColumnHelper } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'

import { allocatorListData } from './allocatorList'

type Allocator = (typeof allocatorListData)[number]

const columnHelper = createColumnHelper<Allocator>()

const simpleColumns = [
  'organizationName',
  'type',
  'region',
  'requiredReplicas',
  'requiredSPs',
] as const

export const allocatorTableData = [
  ...simpleColumns.map((key) =>
    columnHelper.accessor(key, {
      id: key,
      header:
        key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      cell: (info) => info.getValue(),
    }),
  ),
  columnHelper.accessor('apply', {
    id: 'apply',
    header: 'Apply',
    cell: (info) => (
      <div className="flex gap-2 text-brand-300 hover:underline">
        <a href={info.getValue()}>Apply</a>
        <Icon component={ArrowUpRight} />
      </div>
    ),
  }),
]
