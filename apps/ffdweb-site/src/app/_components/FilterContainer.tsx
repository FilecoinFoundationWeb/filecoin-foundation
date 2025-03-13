import type { ReactElement } from 'react'

import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type FilterContainerProps = {
  hasResults: boolean
  bottom: ReactElement
  top: {
    main: ReactElement
    secondary?: ReactElement
  }
  side?: {
    desktop: ReactElement
    mobile: ReactElement
  }
  children: ReactElement
}

const topFiltersGap = 'gap-4'

export function FilterContainer({
  hasResults,
  top,
  bottom,
  side,
  children,
}: FilterContainerProps) {
  const hasSecondaryFilters = Boolean(side?.mobile) || Boolean(top.secondary)

  return (
    <SectionContainer hasSidebar={Boolean(side)}>
      <SideFilterContainer>{side?.desktop}</SideFilterContainer>

      <MainContainer hasSidebar={Boolean(side)}>
        <TopFiltersContainer className="mb-6">
          <SecondaryFiltersContainer hasChildren={hasSecondaryFilters}>
            <SecondaryFilterContainer className="block lg:hidden">
              {side?.mobile}
            </SecondaryFilterContainer>
            <SecondaryFilterContainer>{top.secondary}</SecondaryFilterContainer>
          </SecondaryFiltersContainer>

          <MainFilterContainer>{top.main}</MainFilterContainer>
        </TopFiltersContainer>

        <ResultsContainer hasResults={hasResults}>{children}</ResultsContainer>

        <BottomFilterContainer className="mt-16" hasResults={hasResults}>
          {bottom}
        </BottomFilterContainer>
      </MainContainer>
    </SectionContainer>
  )
}

type ContainerProps = React.ComponentProps<'div'>

function SideFilterContainer({ children }: ContainerProps) {
  return children && <div className="hidden lg:block">{children}</div>
}

function MainFilterContainer({ children }: ContainerProps) {
  return (
    <div className="order-first w-full md:order-last md:max-w-lg">
      {children}
    </div>
  )
}

function TopFiltersContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        topFiltersGap,
        className,
        'flex flex-col items-center justify-between md:flex-row',
      )}
    >
      {children}
    </div>
  )
}

function SecondaryFilterContainer({ children, className }: ContainerProps) {
  return (
    children && (
      <div className={clsx(className, 'w-full md:max-w-56')}>{children}</div>
    )
  )
}

type ContainerWithSidebarProps = ContainerProps & {
  hasSidebar?: boolean
}

function SectionContainer({ children, hasSidebar }: ContainerWithSidebarProps) {
  return (
    <section
      className={clsx(
        hasSidebar && 'lg:grid lg:grid-cols-[200px_1fr] lg:gap-6',
      )}
    >
      {children}
    </section>
  )
}

function MainContainer({ children, hasSidebar }: ContainerWithSidebarProps) {
  return hasSidebar ? <div>{children}</div> : children
}

type ContainerWithChildrenProps = ContainerProps & {
  hasChildren: boolean
}

function SecondaryFiltersContainer({
  children,
  hasChildren,
}: ContainerWithChildrenProps) {
  return (
    hasChildren && (
      <div className={clsx(topFiltersGap, 'flex w-full justify-start')}>
        {children}
      </div>
    )
  )
}

type ContainerWithResultsProps = ContainerProps & {
  hasResults: FilterContainerProps['hasResults']
}

function ResultsContainer({ children, hasResults }: ContainerWithResultsProps) {
  return hasResults ? (
    children
  ) : (
    <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
  )
}

function BottomFilterContainer({
  children,
  className,
  hasResults,
}: ContainerWithResultsProps) {
  return (
    hasResults && (
      <div className={clsx(className, 'flex justify-center')}>
        <div className="max-w-readable w-full">{children}</div>
      </div>
    )
  )
}
