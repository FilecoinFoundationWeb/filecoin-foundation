import type { ReactNode } from 'react'

import { clsx } from 'clsx'

type LayoutProps = {
  children: ReactNode
}

type FilterComponents = [ReactNode, ReactNode?]

type DesktopFiltersProps = {
  searchComponent: ReactNode
  filterComponents?: FilterComponents
  sortComponent: ReactNode
}

type MobileFiltersProps = {
  searchComponent: ReactNode
  filterComponents: FilterComponents
  sortComponent: ReactNode
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
  searchComponent,
  filterComponents,
  sortComponent,
}: MobileFiltersProps) {
  const filterComponentsCount = filterComponents.length
  const minWidthMd = 'md:w-44'
  const flexGrow = 'flex-1'

  const filterContainerWidth = clsx(
    filterComponentsCount === 1 && clsx(flexGrow, 'sm:w-64'),
    filterComponentsCount === 2 &&
      clsx('min-w-0 sm:w-52', minWidthMd, flexGrow),
  )

  return (
    <aside className="flex flex-col gap-3 sm:flex-row lg:hidden">
      {searchComponent}
      <div className="flex flex-1 gap-3 sm:flex-row">
        {filterComponents.map((filterComponent, index) => (
          <div key={index} className={filterContainerWidth}>
            {filterComponent}
          </div>
        ))}
        <div className={minWidthMd}>{sortComponent}</div>
      </div>
    </aside>
  )
}

FilterContainer.DesktopFilters = function DesktopFilters({
  searchComponent,
  filterComponents,
  sortComponent,
}: DesktopFiltersProps) {
  const filterContainerWidth = 'lg:w-48 shrink-0'

  return (
    <div className="hidden justify-end gap-6 lg:flex">
      {searchComponent}
      {filterComponents?.map((filterComponent, index) => (
        <div key={index} className={filterContainerWidth}>
          {filterComponent}
        </div>
      ))}
      <div className={filterContainerWidth}>{sortComponent}</div>
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
