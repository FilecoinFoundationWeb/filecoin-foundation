import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'
import { isExternalLink } from '@/utils/linkUtils'
import { Icon } from './Icon'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

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
  isExternalLink?: boolean
}

const variantStyles = {
  primary:
    'border-brand-300 bg-brand-300 text-brand-800 hover:border-brand-400 hover:bg-brand-400',
  ghost:
    'border-white bg-brand-800 text-brand-100 hover:border-brand-400 hover:text-brand-400 focus:text-brand-400',
}

function ButtonInner({ isExternalLink = false, children }: ButtonInnerProps) {
  return (
    <>
      {children}
      {isExternalLink && <Icon component={ArrowUpRight} />}
    </>
  )
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  className = clsx(
    'focus:brand-outline inline-flex items-center justify-center gap-2 rounded-lg border px-9 py-3 font-semibold transition hover:no-underline sm:whitespace-nowrap',
    variantStyles[variant],
    className,
  )

  const isExternal = isExternalLink(rest.href ? rest.href : '')

  return typeof rest.href === 'undefined' ? (
    <button className={className} {...rest}>
      <ButtonInner>{children}</ButtonInner>
    </button>
  ) : (
    <CustomLink className={className} {...rest}>
      <ButtonInner isExternalLink={isExternal}>{children}</ButtonInner>
    </CustomLink>
  )
}
