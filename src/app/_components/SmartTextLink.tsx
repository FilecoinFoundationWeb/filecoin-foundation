'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { isExternalLink } from '@/utils/linkUtils'

import { type BaseLinkProps, BaseLink } from '@/components/BaseLink'
import { Icon } from '@/components/Icon'

type TextLinkProps = Omit<BaseLinkProps, 'children'> & {
  className?: string
  children: React.ReactNode
}

export const linkBaseStyles =
  'text-brand-300 focus:brand-outline hover:underline'

export function SmartTextLink(props: TextLinkProps) {
  const isExternal = isExternalLink(props.href)
  return isExternal ? (
    <ExternalTextLink {...props} />
  ) : (
    <InternalTextLink {...props} />
  )
}

function InternalTextLink({ className, children, ...rest }: TextLinkProps) {
  return (
    <BaseLink className={clsx(linkBaseStyles, className)} {...rest}>
      {children}
    </BaseLink>
  )
}

function ExternalTextLink({ className, children, ...rest }: TextLinkProps) {
  return (
    <BaseLink
      className={clsx(
        'inline-flex items-center gap-1',
        linkBaseStyles,
        className,
      )}
      {...rest}
    >
      {children}
      <Icon component={ArrowUpRight} size={16} color="brand-400" />
    </BaseLink>
  )
}
