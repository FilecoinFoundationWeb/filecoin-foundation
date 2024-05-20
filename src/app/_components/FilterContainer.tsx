import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

type FilterProps = {
  search: ReactNode
  sort: ReactNode
  category?: ReactNode
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

function MobileFilters({ search, category, sort }: FilterProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
      {search}
      <div className="flex flex-1 gap-3">
        <div className="w-full">{category}</div>
        <div className="max-fit">{sort}</div>
      </div>
    </div>
  )
}

function DesktopFilters({ search, sort }: FilterProps) {
  return (
    <div className="hidden justify-end gap-3 lg:flex">
      {search}
      <div className="min-w-40">{sort}</div>
    </div>
  )
}

function ResultsAndCategory({ results, category }: ResultsAndCategoryProps) {
  return (
    <div className="hidden flex-col gap-6 lg:flex">
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
  return <div className="flex flex-col gap-4">{children}</div>
}

export function FilterContainer({ children }: LayoutProps) {
  return <div className="flex flex-col gap-6 lg:flex-row">{children}</div>
}

FilterContainer.ContentWrapper = ContentWrapper
FilterContainer.MainWrapper = MainWrapper
FilterContainer.MobileFilters = MobileFilters
FilterContainer.PaginationWrapper = PaginationWrapper
FilterContainer.ResultsAndCategory = ResultsAndCategory
FilterContainer.DesktopFilters = DesktopFilters
