'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { isInternalLink } from '@/utils/linkUtils'

import { type CustomLinkProps, CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

export const linkBaseStyles =
  'text-brand-300 focus:brand-outline hover:underline'

export function TextLink({
  className,
  children,
  ...rest
}: Omit<CustomLinkProps, 'children'> & { children: string }) {
  const isExternal = !isInternalLink(rest.href)

  return (
    <CustomLink
      className={clsx(
        isExternal && 'inline-flex items-center gap-1',
        linkBaseStyles,
        className,
      )}
      {...rest}
    >
      {children}
      {isExternal && (
        <Icon component={ArrowUpRight} size={16} color="brand-400" />
      )}
    </CustomLink>
  )
}
