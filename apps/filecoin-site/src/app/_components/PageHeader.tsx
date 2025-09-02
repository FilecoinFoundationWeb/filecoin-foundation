import { clsx } from 'clsx'

import { Heading, type HeadingProps } from '@/components/Heading'
import { Kicker, type KickerProps } from '@/components/Kicker'

import { ButtonRow, type ButtonRowProps } from './ButtonRow'

type PageHeaderProps = {
  title: HeadingProps['children']
  kicker?: KickerProps['children']
  description?: string
  centered?: boolean
  cta?: ButtonRowProps['buttons']
}

export function PageHeader({
  title,
  kicker,
  description,
  centered,
  cta,
}: PageHeaderProps) {
  return (
    <header>
      <div
        className={clsx(
          'flex max-w-3xl flex-col gap-6 text-balance',
          centered && 'mx-auto text-center',
        )}
      >
        {kicker && <Kicker>{kicker}</Kicker>}

        <Heading tag="h1" variant="page-heading">
          {title}
        </Heading>

        {description && (
          <p className="tracking-tighter text-pretty text-[var(--color-paragraph-text)] md:text-xl/7">
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
