import { BaseLink, type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import {
  Icon as IconComponent,
  type IconProps,
} from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

const variantClasses = {
  primary: 'button--primary',
  ghost: 'button--ghost',
} as const

export type ButtonProps = {
  children: React.ReactNode
  variant?: keyof typeof variantClasses
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
  baseDomain: string
} & React.ComponentPropsWithoutRef<'button'>

type ButtonInnerProps = Pick<ButtonProps, 'children' | 'icon'> & {
  isExternalLink?: boolean
}

function ButtonInner({
  icon: Icon,
  children,
  isExternalLink,
}: ButtonInnerProps) {
  return (
    <>
      {!isExternalLink && Icon && <IconComponent component={Icon} />}
      {children}
      {isExternalLink && <IconComponent component={ArrowUpRight} size={20} />}
    </>
  )
}

export function Button({
  variant = 'primary',
  className,
  icon,
  children,
  disabled,
  href,
  baseDomain,
  ...rest
}: ButtonProps) {
  className = clsx(
    'button focus:brand-outline inline-flex items-center justify-center gap-2 py-3 transition hover:no-underline',
    variantClasses[variant],
    {
      'button--disabled disabled:pointer-events-none': disabled,
    },
    className,
  )

  if (typeof href === 'undefined') {
    return (
      <button className={className} disabled={disabled} {...rest}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </button>
    )
  }

  return (
    <BaseLink className={className} href={href} baseDomain={baseDomain}>
      <ButtonInner
        isExternalLink={isExternalLink(href, baseDomain)}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </BaseLink>
  )
}
