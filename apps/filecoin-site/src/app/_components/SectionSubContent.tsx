import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading, type HeadingProps } from '@/components/Heading'

type SectionSubContentProps = {
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  centerCTA?: ButtonRowProps['centered']
}

export function SectionSubContent({
  title,
  description,
  children,
  cta,
  centerCTA,
}: SectionSubContentProps) {
  return (
    <div className="space-y-20">
      <div className="max-w-2xl">
        <Heading
          tag="h2"
          variant="3xl-medium"
          className="section-sub-content-heading-text"
        >
          {title}
        </Heading>
        {description && (
          <p className="section-sub-content-description-text pt-6 text-lg leading-6 font-normal text-balance">
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
