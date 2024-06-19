import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'

type ButtonProps = {
  variant?: 'primary' | 'ghost'
  className?: string
  icon?: React.ReactNode
  children: React.ReactNode
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof CustomLink>
)

type ButtonInnerProps = {
  icon?: React.ReactNode
  children: React.ReactNode
}

const variantStyles = {
  primary:
    'border-brand-300 bg-brand-300 text-brand-800 hover:border-brand-400 hover:bg-brand-400',
  ghost:
    'border-white bg-brand-800 text-brand-100 hover:border-brand-400 hover:text-brand-400 focus:text-brand-400',
}

function ButtonInner({ icon, children }: ButtonInnerProps) {
  return (
    <>
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </>
  )
}

export function Button({
  variant = 'primary',
  className,
  icon,
  children,
  ...rest
}: ButtonProps) {
  className = clsx(
    'focus:brand-outline inline-flex items-center justify-center gap-2 rounded-lg border px-9 py-3 font-semibold transition hover:no-underline sm:whitespace-nowrap',
    variantStyles[variant],
    className,
  )

  return typeof rest.href === 'undefined' ? (
    <button className={className} {...rest}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </button>
  ) : (
    <CustomLink className={className} {...rest}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </CustomLink>
  )
}
