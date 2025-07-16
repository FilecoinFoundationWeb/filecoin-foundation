import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading, type HeadingProps } from '@/components/Heading'

type SectionContentProps = {
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  centerCTA?: ButtonRowProps['centered']
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
      {children && <div className="mt-30 flex flex-col gap-30">{children}</div>}
      {cta && (
        <div className="mt-30">
          <ButtonRow buttons={cta} centered={centerCTA} />
        </div>
      )}
    </div>
  )
}
