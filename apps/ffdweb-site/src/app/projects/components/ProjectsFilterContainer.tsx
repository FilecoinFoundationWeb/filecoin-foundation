import type { ReactElement } from 'react'

import {
  FilterContainer,
  type FilterContainerProps,
} from '@/components/FilterContainer'

type ProjectsFilterContainerProps = {
  hasResults: FilterContainerProps['hasResults']
  bottom: FilterContainerProps['bottom']
  top: {
    main: ReactElement
    secondary: ReactElement
  }
  children: ReactElement
}

export function ProjectsFilterContainer({
  hasResults,
  bottom,
  top,
  children,
}: ProjectsFilterContainerProps) {
  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {top.main}

        <div className="flex items-center justify-between gap-4">
          <div className="w-full md:max-w-72">{top.secondary}</div>
        </div>
      </div>

      <FilterContainer.ResultsContainer hasResults={hasResults}>
        {children}
      </FilterContainer.ResultsContainer>

      {hasResults && (
        <FilterContainer.BottomFilterContainer className="mt-16">
          {bottom}
        </FilterContainer.BottomFilterContainer>
      )}
    </section>
  )
}
