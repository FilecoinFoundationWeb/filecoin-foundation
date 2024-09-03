import { clsx } from 'clsx'

import type { CTAProps } from '@/types/sharedProps/ctaType'

import { Button } from '@/components/Button'

export type CTAButtonGroupProps = {
  cta: CTAProps | [CTAProps, CTAProps]
}

export function CTAButtonGroup({ cta }: CTAButtonGroupProps) {
  const ctaArray = Array.isArray(cta) ? cta : [cta]

  const gridClasses = clsx(
    'grid gap-4',
    ctaArray.length === 1
      ? 'lg:grid-cols-1'
      : 'sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-4',
  )

  return (
    <div className={gridClasses}>
      {ctaArray.map(({ href, text }, index) => (
        <Button
          key={href}
          href={href}
          variant={index === 0 ? 'primary' : 'ghost'}
        >
          {text}
        </Button>
      ))}
    </div>
  )
}
