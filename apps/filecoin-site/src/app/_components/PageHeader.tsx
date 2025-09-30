import { clsx } from 'clsx'

import { Heading, type HeadingProps } from '@/components/Heading'

import { ButtonRow, type ButtonRowProps } from './ButtonRow'

type PageHeaderProps = {
  title: HeadingProps['children']
  description?: string
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

        {description && (
          <p className="text-pretty text-[var(--color-paragraph-text)] md:text-xl/7">
            {description}
          </p>
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
