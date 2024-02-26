import clsx from 'clsx'

import { TextLink } from '@/components/TextLink'

type ButtonProps = {
  variant?: 'primary'
  className?: string
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof TextLink>
)

const variantStyles = {
  primary:
    'bg-transparent font-semibold text-white border hover:text-brand-300 hover:border-brand-300 focus:text-brand-300 focus:border-brand-300 focus:outline-brand-300',
}

export function Button({
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 justify-center rounded-[10px] px-9 py-3 focus:outline focus:outline-1 focus:outline-offset-2 transition'

  className = clsx(baseStyles, variantStyles[variant], className)

  return typeof rest.href === 'undefined' ? (
    <button className={className} {...rest} />
  ) : (
    <TextLink className={className} {...rest} />
  )
}
