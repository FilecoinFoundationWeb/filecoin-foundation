import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { getUIConfig } from '../config/ui-config'
import { isExternalLink } from '../utils/linkUtils'

import { BaseLink, type BaseLinkProps } from './BaseLink'
import { Icon as IconComponent, type IconProps } from './Icon'

export type ButtonProps = {
  variant: keyof typeof variantClasses
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
  size?: keyof typeof sizeClasses
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

const sizeClasses = {
  compact: 'button--compact',
} as const

export function Button({
  variant,
  className,
  icon,
  children,
  disabled,
  href,
  size,
  ...rest
}: ButtonProps) {
  className = clsx(
    'button',
    variantClasses[variant],
    size && sizeClasses[size],
    className,
  )

  if (typeof href === 'undefined' || disabled) {
    return (
      <button className={className} disabled={disabled} {...rest}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </button>
    )
  }

  const { baseDomain } = getUIConfig()

  return (
    <BaseLink className={className} href={href}>
      <ButtonInner
        isExternalLink={isExternalLink(href, baseDomain)}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </BaseLink>
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
