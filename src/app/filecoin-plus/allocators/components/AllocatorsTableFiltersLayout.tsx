import type { ReactNode } from 'react'

type AllocatorsTableFiltersLayoutProps = {
  nameSearch: ReactNode
  typeFilter: ReactNode
  locationFilter: ReactNode
}

export function AllocatorsTableFiltersLayout({
  nameSearch,
  typeFilter,
  locationFilter,
}: AllocatorsTableFiltersLayoutProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row">
      <div className="w-full">{nameSearch}</div>

      <div className="flex shrink-0 grow gap-4">
        <div className="grow md:w-44 lg:w-48">{typeFilter}</div>
        <div className="grow md:w-44 lg:w-48">{locationFilter}</div>
      </div>
    </div>
  )
}