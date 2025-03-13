import Link from 'next/link'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import type { Icon as IconType } from '@phosphor-icons/react'
import { CaretRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = {
  href: string
  children: string
  icon?: IconType
  isCardLink?: boolean
  cardLinkClassName?: string
}

export function CTALink({
  href,
  children,
  icon,
  isCardLink = false,
  cardLinkClassName,
}: CTALinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)

  return (
    <Link
      href={href}
      className={clsx(
        'text-brand-primary-300 focus:brand-outline inline-flex items-center gap-1.5 font-bold hover:underline',
        isCardLink && 'absolute inset-0',
      )}
    >
      <span
        className={clsx(
          'flex items-center gap-2',
          isCardLink && [
            'absolute inline-flex items-center gap-2',
            cardLinkClassName || 'bottom-6 left-28 md:left-6',
          ],
        )}
      >
        {children}
        <Icon
          component={getIconComponent(isExternal, icon)}
          size={18}
          weight="bold"
        />
      </span>
    </Link>
  )
}

function getIconComponent(isExternal: boolean, icon?: IconType) {
  if (icon) {
    return icon
  }

  if (isExternal) {
    return ArrowUpRight
  }

  return CaretRight
}
