import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading, type HeadingProps } from '@/components/Heading'

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
          className="text-xl font-medium tracking-tighter text-pretty md:text-2xl"
        >
          {title}
        </Heading>
        {description && (
          <p className="pt-6 text-lg/7 font-normal text-balance text-[var(--color-text-paragraph)]">
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
