import clsx from 'clsx'

import { TextLink } from '@/components/TextLink'

type ButtonProps = {
  variant?: 'primary' | 'ghost'
  className?: string
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof TextLink>
)

const variantStyles = {
  primary:
    'border-brand-300 bg-brand-300 text-brand-800 hover:border-brand-400 hover:bg-brand-400',
  ghost: 'border-white bg-brand-800 hover:border-brand-400',
}

export function Button({
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-9 py-3 font-semibold no-underline transition focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-white'

  className = clsx(baseStyles, variantStyles[variant], className)

  return typeof rest.href === 'undefined' ? (
    <button className={className} {...rest} />
  ) : (
    <TextLink className={className} {...rest} />
  )
}
