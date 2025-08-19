import clsx from 'clsx'
import slugify from 'slugify'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading, type HeadingProps } from '@/components/Heading'

type SectionContentProps = {
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
  cta?: ButtonRowProps['buttons']
  centerCTA?: ButtonRowProps['centered']
  centerTitle?: boolean
}

export function SectionContent({
  title,
  description,
  children,
  cta,
  centerCTA,
  centerTitle,
}: SectionContentProps) {
  return (
    <div
      className="section-content"
      id={slugify(title.toString(), { lower: true })}
    >
      <div className={clsx('max-w-3xl', centerTitle && 'mx-auto text-center')}>
        <Heading tag="h2" variant="section-heading">
          {title}
        </Heading>
        {description && (
          <p className="pt-6 text-2xl/8 text-pretty">{description}</p>
        )}
      </div>
      {children && (
        <div className="mt-15 flex flex-col gap-15 md:gap-30">{children}</div>
      )}
      {cta && (
        <div className="mt-15">
          <ButtonRow buttons={cta} centered={centerCTA} />
        </div>
      )}
    </div>
  )
}
