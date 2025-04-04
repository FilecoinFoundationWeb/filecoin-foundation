import type { ReactElement } from 'react'

import clsx from 'clsx'

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
    tertiary: ReactElement
  }
  children: ReactElement
}

const layoutGap = 'gap-6'

export function ProjectsFilterContainer({
  hasResults,
  bottom,
  top,
  children,
}: ProjectsFilterContainerProps) {
  return (
    <section>
      <div
        className={clsx(
          'mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between',
          layoutGap,
        )}
      >
        {top.main}

        <div
          className={clsx(
            'flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between',
            layoutGap,
          )}
        >
          <div className="w-full lg:max-w-72">{top.secondary}</div>
          <div className="w-full sm:max-w-56">{top.tertiary}</div>
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
