import { ButtonRow, type ButtonRowProps } from '@filecoin-foundation/ui-filecoin/ButtonRow'
import {
  Heading,
  type HeadingProps,
} from '@filecoin-foundation/ui-filecoin/Heading'


type SectionSubContentProps = {
  headingTag: HeadingProps['tag']
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  centerCTA?: ButtonRowProps['centered']
}

export function SectionSubContent({
  headingTag,
  title,
  description,
  children,
  cta,
  centerCTA,
}: SectionSubContentProps) {
  return (
    <div className="space-y-10 md:space-y-20">
      <div className="max-w-2xl">
        <Heading
          tag={headingTag}
          className="text-xl font-medium md:text-3xl/10"
        >
          {title}
        </Heading>
        {description && (
          <p className="pt-6 text-xl/7 text-pretty text-[var(--color-paragraph-text)]">
            {description}
          </p>
        )}
      </div>
      {children}
      {cta && (
        <div className="mt-20">
          <ButtonRow buttons={cta} centered={centerCTA} />
        </div>
      )}
    </div>
  )
}
