'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'
import { Icon as IconComponent } from '@/components/Icon'

import { isExternalLink } from '@/utils/linkUtils'

type TextLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const linkBaseStyles =
  'inline-flex items-center gap-1 text-brand-300 focus:brand-outline hover:underline'

export function TextLink({
  href,
  className,
  children,
  ...rest
}: TextLinkProps) {
  return (
    <CustomLink
      href={href}
      className={clsx(linkBaseStyles, className)}
      {...rest}
    >
      <>
        {children}
        {isExternalLink(href) && (
          <IconComponent size={16} component={ArrowUpRight} />
        )}
      </>
    </CustomLink>
  )
}
