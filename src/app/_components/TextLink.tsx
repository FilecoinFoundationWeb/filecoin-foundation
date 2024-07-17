'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'
import { Icon as IconComponent } from '@/components/Icon'

import { isExternalLink } from '@/utils/linkUtils'

type TextLinkProps = {
  href: string
  children: React.ReactNode
} & React.ComponentProps<'a'>

export const linkBaseStyles =
  'text-brand-300 focus:brand-outline hover:underline'

export function TextLink({
  href,
  className,
  children,
  ...rest
}: TextLinkProps) {
  const isExternal = isExternalLink(href)

  return (
    <CustomLink
      href={href}
      className={clsx(
        linkBaseStyles,
        isExternal && 'inline-flex items-center gap-1',
        className,
      )}
      {...rest}
    >
      {children}
      {isExternal && (
        <IconComponent size={16} component={ArrowUpRight} color="brand-400" />
      )}
    </CustomLink>
  )
}
