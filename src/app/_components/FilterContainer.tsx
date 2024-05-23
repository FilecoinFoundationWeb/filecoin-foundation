import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

type FilterProps = {
  search: ReactNode
  sort: ReactNode
  category?: ReactNode
  results?: ReactNode
}

type ResultsAndCategoryProps = {
  category: ReactNode
  results: ReactNode
}

type ContentProps = {
  children: ReactNode
}

type PaginationProps = {
  children: ReactNode
}

function MobileFiltersAndResults({
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

function DesktopFilters({ search, sort }: FilterProps) {
  return (
    <div className="hidden justify-end gap-6 lg:flex">
      {search}
      <div className="min-w-40">{sort}</div>
    </div>
  )
}

function ResultsAndCategory({ results, category }: ResultsAndCategoryProps) {
  return (
    <div className="hidden flex-col gap-10 lg:flex">
      {results}
      {category}
    </div>
  )
}

function ContentWrapper({ children }: ContentProps) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-6">{children}</div>
  )
}

function PaginationWrapper({ children }: PaginationProps) {
  return <div className="sm:w-fit">{children}</div>
}

function MainWrapper({ children }: ContentProps) {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-1 lg:gap-6">
      {children}
    </div>
  )
}

export function FilterContainer({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-baseline gap-6 lg:flex-row">
      {children}
    </div>
  )
}

FilterContainer.ContentWrapper = ContentWrapper
FilterContainer.MainWrapper = MainWrapper
FilterContainer.MobileFiltersAndResults = MobileFiltersAndResults
FilterContainer.PaginationWrapper = PaginationWrapper
FilterContainer.ResultsAndCategory = ResultsAndCategory
FilterContainer.DesktopFilters = DesktopFilters
