import { BaseLink, type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Icon as IconComponent, type IconProps } from '@/components/Icon'

const variantStyles = {
  primary:
    'border-brand-300 bg-brand-300 text-brand-800 hover:border-brand-400 hover:bg-brand-400',
  ghost:
    'border-white bg-brand-800 text-brand-100 hover:border-brand-400 hover:text-brand-400 focus:text-brand-400',
}

type ButtonProps = {
  children: React.ReactNode
  variant?: keyof typeof variantStyles
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
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
      {isExternalLink && <IconComponent component={ArrowUpRight} />}
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
  ...rest
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition hover:no-underline focus:brand-outline sm:px-9',
    variantStyles[variant],
    {
      'bg-brand-200 disabled:pointer-events-none': disabled,
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
    <BaseLink className={className} href={href}>
      <ButtonInner
        isExternalLink={isExternalLink(href, BASE_DOMAIN)}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </BaseLink>
  )
}
