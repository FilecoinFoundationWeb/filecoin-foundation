'use client'

import { useTranslations } from 'next-intl'

import {
  Pagination,
  type PaginationProps,
} from '@filecoin-foundation/ui-filecoin/Pagination'

import { getPaginationDirections, getPaginationLabels } from '../data/pagination'

type TranslatedPaginationProps = Pick<
  PaginationProps,
  'pageCount' | 'numberRange'
>

export function TranslatedPagination(props: TranslatedPaginationProps) {
  const t = useTranslations()
  const directions = getPaginationDirections(t)
  const labels = getPaginationLabels(t)

  return <Pagination {...props} directions={directions} labels={labels} />
}
