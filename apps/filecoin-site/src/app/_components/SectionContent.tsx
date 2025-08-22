import clsx from 'clsx'
import slugify from 'slugify'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading, type HeadingProps } from '@/components/Heading'

type SectionContentDescriptionProps = {
  description: string | Array<string>
  descriptionColorBase?: boolean
}

type SectionContentProps = {
  title: HeadingProps['children']
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  centerCTA?: ButtonRowProps['centered']
  centerTitle?: boolean
} & Partial<SectionContentDescriptionProps>

export function SectionContent({
  title,
  description,
  descriptionColorBase,
  children,
  cta,
  centerCTA,
  centerTitle,
}: SectionContentProps) {
  return (
    <div
      className="section-content space-y-15"
      id={slugify(title.toString(), { lower: true })}
    >
      <div
        className={clsx(
          'max-w-3xl space-y-6',
          centerTitle && 'mx-auto text-center',
        )}
      >
        <Heading tag="h2" variant="section-heading">
          {title}
        </Heading>
        {description && (
          <div className="space-y-6">
            <SectionContentDescription
              descriptionColorBase={descriptionColorBase}
              description={description}
            />
          </div>
        )}
      </div>
      {children && (
        <div className="flex flex-col gap-15 md:gap-30">{children}</div>
      )}
      {cta && <ButtonRow buttons={cta} centered={centerCTA} />}
    </div>
  )
}

function SectionContentDescription({
  description,
  descriptionColorBase,
}: SectionContentDescriptionProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description]

  return descriptionArray.map((item, index) => (
    <p
      key={index}
      className={clsx(
        'text-xl text-pretty',
        descriptionColorBase
          ? 'text-[var(--color-text-base)]'
          : 'text-[var(--color-subheading-text-muted)]',
      )}
    >
      {item}
    </p>
  ))
}
