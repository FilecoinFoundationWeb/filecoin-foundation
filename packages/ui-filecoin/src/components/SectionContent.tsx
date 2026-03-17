import { clsx } from 'clsx'
import slugify from 'slugify'

import { ButtonRow, type ButtonRowProps } from './ButtonRow'
import { Heading, type HeadingProps } from './Heading'

type SectionContentDescriptionProps = {
  description: string | Array<string>
  descriptionColorBase?: boolean
}

type SectionContentProps = {
  headingTag: HeadingProps['tag']
  title: HeadingProps['children']
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  ctaPosition?: 'below' | 'below-center' | 'inline'
  /**
   * @deprecated Use ctaPosition instead.
   */
  centerCTA?: ButtonRowProps['centered']
  centerTitle?: boolean
} & Partial<SectionContentDescriptionProps>

export function SectionContent({
  headingTag,
  title,
  description,
  descriptionColorBase,
  children,
  cta,
  centerCTA,
  ctaPosition = 'below',
  centerTitle,
}: SectionContentProps) {
  const isCTAInline = ctaPosition === 'inline'
  const isCTACentered = ctaPosition === 'below-center' || centerCTA
  const isTitleCentered = !isCTAInline && centerTitle

  return (
    <div
      className="section-content space-y-15"
      id={slugify(title.toString(), { lower: true })}
    >
      <div
        className={clsx({
          'flex flex-col gap-6 md:flex-row md:items-start': isCTAInline,
        })}
      >
        <div
          className={clsx(
            'max-w-3xl space-y-6',
            isTitleCentered && 'mx-auto text-center',
          )}
        >
          <Heading tag={headingTag} variant="section-heading">
            {title}
          </Heading>
          {description && (
            <SectionContentDescription
              descriptionColorBase={descriptionColorBase}
              description={description}
            />
          )}
        </div>

        {cta && isCTAInline && (
          <div className="shrink-0">
            <ButtonRow buttons={cta} />
          </div>
        )}
      </div>

      {children && (
        <div className="flex flex-col gap-15 md:gap-30">{children}</div>
      )}

      {cta && !isCTAInline && (
        <ButtonRow buttons={cta} centered={isCTACentered} />
      )}
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
      className={clsx('text-2xl/8.5 text-pretty', {
        'text-(--color-text-base)': descriptionColorBase,
        'text-(--color-subheading-text-muted)': !descriptionColorBase,
      })}
    >
      {item}
    </p>
  ))
}
