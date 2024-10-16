import type { ReactNode } from 'react'

import { clsx } from 'clsx'

type LayoutProps = {
  children: ReactNode
}

type FilterProps = {
  search: ReactNode
  sort: ReactNode
  category?: ReactNode
  results?: ReactNode
}

type ResultsProps = {
  category: ReactNode
  results: ReactNode
  gapSize?: 'default' | 'wide'
}

type WrapperProps = {
  children: ReactNode
}

export function FilterContainer({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-baseline gap-6 lg:flex-row">
      {children}
    </div>
  )
}

FilterContainer.MobileFiltersAndResults = function MobileFiltersAndResults({
  search,
  category,
  sort,
  results,
}: FilterProps) {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      <div className="flex flex-col gap-3 sm:flex-row">
        {search}
        <div className="flex flex-1 gap-3 sm:flex-row">
          <div className="w-full">{category}</div>
          <div className="max-fit">{sort}</div>
        </div>
      </div>
      {results}
    </div>
  )
}

FilterContainer.DesktopFilters = function DesktopFilters({
  search,
  sort,
}: FilterProps) {
  return (
    <div className="hidden justify-end gap-6 lg:flex">
      {search}
      <div>{sort}</div>
    </div>
  )
}

FilterContainer.ResultsAndCategory = function ResultsAndCategory({
  results,
  category,
  gapSize = 'default',
}: ResultsProps) {
  return (
    <div
      className={clsx('hidden flex-col lg:flex', {
        'gap-8': gapSize === 'default',
        'gap-10': gapSize === 'wide',
      })}
    >
      {results}
      {category}
    </div>
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
