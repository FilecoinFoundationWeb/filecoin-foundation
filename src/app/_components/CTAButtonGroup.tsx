import { clsx } from 'clsx'

import { Button } from '@/components/Button'

import type { CTAProps } from '@/types/sharedProps/ctaType'

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
      {ctaArray.map((button, index) => (
        <Button
          key={index}
          href={button.href}
          variant={index === 0 ? 'primary' : 'ghost'}
        >
          {button.text}
        </Button>
      ))}
    </div>
  )
}
