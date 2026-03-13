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
  ctaPosition?: 'below' | 'inline'
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
  ctaPosition = 'below',
  centerCTA,
  centerTitle,
}: SectionContentProps) {
  const isInline = ctaPosition === 'inline'

  return (
    <div
      className="section-content space-y-15"
      id={slugify(title.toString(), { lower: true })}
    >
      <div
        className={clsx(
          isInline
            ? 'flex flex-col gap-6 md:flex-row md:items-start md:justify-between'
            : 'max-w-3xl space-y-6',
          !isInline && centerTitle && 'mx-auto text-center',
        )}
      >
        <div className={clsx('space-y-6', isInline && 'max-w-3xl')}>
          <Heading tag={headingTag} variant="section-heading">
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

        {cta && isInline && (
          <div className="shrink-0">
            <ButtonRow buttons={cta} centered={centerCTA} />
          </div>
        )}
      </div>

      {children && (
        <div className="flex flex-col gap-15 md:gap-30">{children}</div>
      )}

      {cta && !isInline && <ButtonRow buttons={cta} centered={centerCTA} />}
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
        'text-2xl/8.5 text-pretty',
        descriptionColorBase
          ? 'text-(--color-text-base'
          : 'text-(--color-subheading-text-muted)',
      )}
    >
      {item}
    </p>
  ))
}
