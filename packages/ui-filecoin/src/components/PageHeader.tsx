import type { ReactElement } from 'react'

import { clsx } from 'clsx'

import { ButtonRow, type ButtonRowProps } from './ButtonRow'
import { Heading, type HeadingProps } from './Heading'

type PageHeaderProps = {
  title: HeadingProps['children']
  description?: string | ReactElement
  centered?: boolean
  cta?: ButtonRowProps['buttons']
}

export function PageHeader({
  title,
  description,
  centered,
  cta,
}: PageHeaderProps) {
  return (
    <header>
      <div
        className={clsx(
          'flex max-w-3xl flex-col gap-6',
          centered && 'mx-auto text-center',
        )}
      >
        <Heading tag="h1" variant="page-heading">
          {title}
        </Heading>

        {renderDescription(description)}
      </div>

      {cta && (
        <div className="mt-15">
          <ButtonRow buttons={cta} centered={centered} />
        </div>
      )}
    </header>
  )
}

function renderDescription(description: PageHeaderProps['description']) {
  if (!description) return null

  const style = 'text-pretty text-(--color-paragraph-text-strong) md:text-xl/7'

  if (typeof description === 'string') {
    return <p className={style}>{description}</p>
  }

  return <span className={style}>{description}</span>
}
