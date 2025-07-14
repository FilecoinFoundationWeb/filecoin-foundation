import { clsx } from 'clsx'

import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { Button } from '@/components/Button'
import { Heading, type HeadingProps } from '@/components/Heading'

type SectionContentProps = {
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
  cta?:
    | React.ReactElement<typeof Button>
    | Array<React.ReactElement<typeof Button>>
  centerCTA?: boolean
}

export function SectionContent({
  title,
  description,
  children,
  cta,
  centerCTA,
}: SectionContentProps) {
  return (
    <div>
      <div className="max-w-3xl">
        <Heading tag="h2" variant="6xl-medium">
          {title}
        </Heading>
        {description && (
          <div className="pt-6 text-xl leading-8 font-normal text-balance">
            <DescriptionText>{description}</DescriptionText>
          </div>
        )}
      </div>
      {children && <div className="mt-32 flex flex-col gap-32">{children}</div>}
      {cta && (
        <div
          className={clsx(
            'mt-16 flex flex-wrap gap-3 sm:gap-6',
            centerCTA && 'justify-center',
          )}
        >
          {cta}
        </div>
      )}
    </div>
  )
}
