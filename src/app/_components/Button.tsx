import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { CustomLink, type CustomLinkProps } from '@/components/CustomLink'
import { Icon as IconComponent, type IconProps } from '@/components/Icon'

import { isExternalLink } from '@/utils/linkUtils'

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
  href?: CustomLinkProps['href']
  disabled?: boolean; 
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
    'inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition focus:brand-outline hover:no-underline sm:px-9',
    variantStyles[variant],
    className,
    {
      'bg-brand-200 disabled:pointer-events-none': disabled,
    }
  )



  if (typeof href === 'undefined') {
    return (
      <button className={className} disabled={disabled} {...rest}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </button>
    )
  }

  return (
    <CustomLink className={className} href={href}>
      <ButtonInner isExternalLink={isExternalLink(href)} icon={icon}>
        {children}
      </ButtonInner>
    </CustomLink>
  )
}
