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

export type ButtonProps<Variants extends VariantClasses> = {
  children: React.ReactNode
  variants: { options: Variants; selected?: keyof Variants }
  icon?: IconProps['component']
  href?: BaseLinkProps['href']
  baseDomain: string
} & React.ComponentPropsWithoutRef<'button'>

type ButtonInnerProps = Pick<
  ButtonProps<VariantClasses>,
  'children' | 'icon'
> & {
  isExternalLink?: boolean
}

export function Button<Variants extends VariantClasses>({
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
    'button inline-flex items-center justify-center gap-2 py-3 hover:no-underline',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    variant,
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
      {!isExternalLink && Icon && (
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
