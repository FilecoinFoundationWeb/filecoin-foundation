import type { ReactElement } from 'react'

import { clsx } from 'clsx'

import { ButtonRow, type ButtonRowProps } from './ButtonRow'
import { Heading, type HeadingProps } from './Heading'

export type PageHeaderProps = {
  title: HeadingProps['children']
  description?: string | ReactElement
  centered?: boolean
  cta?: ButtonRowProps['buttons']
  variant?: 'default' | 'highContrast'
}

export function PageHeader({
  title,
  description,
  centered,
  cta,
  variant = 'default',
}: PageHeaderProps) {
  const descriptionStyle = clsx(
    'text-balance md:text-xl/7',
    variant === 'highContrast'
      ? 'text-(--color-paragraph-text-strong)'
      : 'text-(--color-paragraph-text)',
  )

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

        {description && (
          <span className={descriptionStyle}>
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              <span>{description}</span>
            )}
          </span>
        )}
      </div>

      {cta && (
        <div className="mt-15">
          <ButtonRow buttons={cta} centered={centered} />
        </div>
      )}
    </header>
  )
}
