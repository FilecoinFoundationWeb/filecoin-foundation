import type { ComponentType } from 'react'

import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { isExternalLink } from '../utils/linkUtils'

import { BaseLink, type BaseLinkProps } from './BaseLink'
import { Icon as IconComponent, type IconProps } from './Icon'

export type ButtonProps = {
  baseDomain: string
  LinkComponent?: ComponentType<Omit<BaseLinkProps, 'LinkComponent'>>
  variant: keyof typeof variantClasses
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

type ButtonInnerProps = Pick<ButtonProps, 'children' | 'icon'> & {
  isExternalLink?: boolean
}

const variantClasses = {
  primary: 'button--primary',
  ghost: 'button--ghost',
  tertiary: 'button--tertiary',
} as const

export function Button({
  variant,
  className,
  icon,
  children,
  disabled,
  href,
  baseDomain,
  LinkComponent = BaseLink,
  ...rest
}: ButtonProps) {
  className = clsx(
    'button inline-flex items-center justify-center gap-2 text-base font-medium hover:no-underline',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    variantClasses[variant],
    className,
  )

  if (typeof href === 'undefined' || disabled) {
    return (
      <button className={className} disabled={disabled} {...rest}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </button>
    )
  }

  return (
    <LinkComponent className={className} href={href} baseDomain={baseDomain}>
      <ButtonInner
        isExternalLink={isExternalLink(href, baseDomain)}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </LinkComponent>
  )
}

function ButtonInner({
  icon: Icon,
  children,
  isExternalLink,
}: ButtonInnerProps) {
  return (
    <>
      {Icon && (
        <span className="button-custom-icon">
          <IconComponent component={Icon} />
        </span>
      )}

      <span>{children}</span>

      {isExternalLink && (
        <span className="button-arrow-icon">
          <IconComponent component={ArrowUpRightIcon} size={20} />
        </span>
      )}
    </>
  )
}
