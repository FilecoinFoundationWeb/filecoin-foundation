import type { ReactNode } from 'react'

import { clsx } from 'clsx'

import type { NonEmptyReadonlyArray } from '@/types/utils'

type LayoutProps = {
  children: ReactNode
}

type DesktopFiltersProps = {
  search: ReactNode
  filters?: NonEmptyReadonlyArray<ReactNode>
  sort: ReactNode
}

type MobileFiltersProps = {
  search: ReactNode
  filters: NonEmptyReadonlyArray<ReactNode>
  sort: ReactNode
}

type ResultsProps = {
  category: ReactNode
  results?: ReactNode
  gapSize?: 'default' | 'wide'
}

type WrapperProps = {
  children: ReactNode
}

export function FilterContainer({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
      {children}
    </div>
  )
}

FilterContainer.MobileFiltersAndResults = function MobileFiltersAndResults({
  search,
  filters,
  sort,
}: MobileFiltersProps) {
  const filtersCount = filters.length

  const defaultWidth = clsx(
    filtersCount === 1 && 'flex-1 sm:w-64 md:w-44',
    filtersCount >= 2 && 'w-2/5 flex-1 min-w-0 sm:w-52 md:w-44',
  )

  return (
    <aside className="flex flex-col gap-3 sm:flex-row lg:hidden">
      {search}
      <div className="flex flex-1 gap-3 sm:flex-row">
        {filters.map((filter, index) => (
          <div key={index} className={defaultWidth}>
            {filter}
          </div>
        ))}
        <div className="md:w-44">{sort}</div>
      </div>
    </aside>
  )
}

const desktopFiltersWidth = 'lg:w-44'

FilterContainer.DesktopFilters = function DesktopFilters({
  search,
  filters,
  sort,
}: DesktopFiltersProps) {
  return (
    <div className="hidden justify-end gap-6 lg:flex">
      {search}
      {filters?.map((filter, index) => (
        <div key={index} className={desktopFiltersWidth}>
          {filter}
        </div>
      ))}
      <div className={desktopFiltersWidth}>{sort}</div>
    </div>
  )
}

FilterContainer.ResultsAndCategory = function ResultsAndCategory({
  results,
  category,
  gapSize = 'default',
}: ResultsProps) {
  return (
    <aside
      className={clsx('hidden flex-col lg:flex', {
        'gap-8': gapSize === 'default',
        'gap-10': gapSize === 'wide',
      })}
    >
      {results}
      {category}
    </aside>
  )
}

FilterContainer.ContentWrapper = function ContentWrapper({
  children,
}: WrapperProps) {
  return <div className="flex flex-col gap-6">{children}</div>
}

FilterContainer.PaginationWrapper = function PaginationWrapper({
  children,
}: WrapperProps) {
  return <div className="sm:w-fit sm:self-center">{children}</div>
}

FilterContainer.MainWrapper = function MainWrapper({ children }: WrapperProps) {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-1 lg:gap-6">
      {children}
    </div>
  )
}
