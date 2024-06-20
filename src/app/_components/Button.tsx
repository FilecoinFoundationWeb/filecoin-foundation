import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'

import { isExternalLink } from '@/utils/linkUtils'

import { Icon } from './Icon'

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

function ButtonInner({ icon, children, isExternalLink }: ButtonInnerProps) {
  return (
    <>
      {!isExternalLink && <span aria-hidden="true">{icon}</span>}
      {children}
      {isExternalLink && <Icon component={ArrowUpRight} />}
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

  const isExternal = isExternalLink(rest.href ? rest.href : '')

  return typeof rest.href === 'undefined' ? (
    <button className={className} {...rest}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </button>
  ) : (
    <CustomLink className={className} {...rest}>
      <ButtonInner isExternalLink={isExternal} icon={icon}>
        {children}
      </ButtonInner>
    </CustomLink>
  )
}
