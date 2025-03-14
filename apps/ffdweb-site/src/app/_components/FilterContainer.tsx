import { Fragment, type ComponentProps, type ReactElement } from 'react'

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
  return (
    <section
      className={clsx(side && 'lg:grid lg:grid-cols-[200px_1fr] lg:gap-6')}
    >
      {side?.desktop && (
        <SideFilterContainer>{side?.desktop}</SideFilterContainer>
      )}

      <Tag as={side ? 'div' : Fragment}>
        <TopFiltersContainer className="mb-6">
          <SecondaryFiltersContainer
            className={clsx(
              !top.secondary && !side?.mobile && 'hidden',
              !top.secondary && side?.mobile && 'lg:hidden',
            )}
          >
            {side?.mobile && (
              <SecondaryFilterContainer className="block lg:hidden">
                {side?.mobile}
              </SecondaryFilterContainer>
            )}

            {top.secondary && (
              <SecondaryFilterContainer>
                {top.secondary}
              </SecondaryFilterContainer>
            )}
          </SecondaryFiltersContainer>

          <MainFilterContainer>{top.main}</MainFilterContainer>
        </TopFiltersContainer>

        <ResultsContainer hasResults={hasResults}>{children}</ResultsContainer>

        {hasResults && (
          <BottomFilterContainer className="mt-16">
            {bottom}
          </BottomFilterContainer>
        )}
      </Tag>
    </section>
  )
}

type ContainerProps = ComponentProps<'div'>

function SideFilterContainer({ children }: ContainerProps) {
  return <div className="hidden lg:block">{children}</div>
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
  return <div className={clsx(className, 'w-full md:max-w-56')}>{children}</div>
}

function SecondaryFiltersContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(topFiltersGap, className, 'flex w-full justify-start')}
    >
      {children}
    </div>
  )
}

function BottomFilterContainer({ children, className }: ContainerProps) {
  return (
    <div className={clsx(className, 'flex justify-center')}>
      <div className="max-w-readable w-full">{children}</div>
    </div>
  )
}

type ContainerWithTagProps = ContainerProps & {
  as: React.ElementType | typeof Fragment
}

function Tag({ children, as: Component }: ContainerWithTagProps) {
  return <Component>{children}</Component>
}

type ResultsContainerProps = ContainerProps &
  Pick<FilterContainerProps, 'hasResults'>

function ResultsContainer({ children, hasResults }: ResultsContainerProps) {
  return hasResults ? (
    children
  ) : (
    <div className="mt-16">
      <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
    </div>
  )
}
