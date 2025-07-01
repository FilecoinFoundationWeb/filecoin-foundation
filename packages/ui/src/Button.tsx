import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { BaseLink, type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import {
  Icon as IconComponent,
  type IconProps,
} from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

export type VariantClasses = {
  primary: string
  [key: string]: string
}

export type ButtonProps<Variants extends VariantClasses = VariantClasses> = {
  children: React.ReactNode
  variants: { options: Variants; selected?: keyof Variants }
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
  baseDomain: string
} & React.ComponentPropsWithoutRef<'button'>

type ButtonInnerProps = Pick<ButtonProps, 'children' | 'icon'> & {
  isExternalLink?: boolean
}

export function Button<Variants extends VariantClasses = VariantClasses>({
  variants,
  className,
  icon,
  children,
  disabled,
  href,
  baseDomain,
  ...rest
}: ButtonProps<Variants>) {
  const variant = variants.options[variants.selected || 'primary']

  className = clsx(
    'button focus:brand-outline inline-flex cursor-pointer items-center justify-center gap-2 py-3 transition hover:no-underline disabled:pointer-events-none disabled:cursor-not-allowed',
    variant,
    disabled && 'button--disabled',
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

function ButtonInner({
  icon: Icon,
  children,
  isExternalLink,
}: ButtonInnerProps) {
  return (
    <>
      {!isExternalLink && Icon && <IconComponent component={Icon} />}
      <span>{children}</span>
      {isExternalLink && (
        <IconComponent component={ArrowUpRightIcon} size={20} />
      )}
    </>
  )
}
