'use client'

import type { Dispatch, SetStateAction } from 'react'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { type BaseLinkProps, BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type LinkItemProps = {
  label: string
  href: BaseLinkProps['href']
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function LinkItem({ label, href, nested, setOpen }: LinkItemProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)
  const containerStyles = clsx(
    nested && 'ml-6',
    isExternal && 'inline-flex items-center gap-1',
  )

  return (
    <li className={containerStyles}>
      <BaseLink
        className="text-link relative before:absolute before:inset-0 before:-m-3.5 before:content-['']"
        href={href}
        baseDomain={BASE_DOMAIN}
        onClick={() => setOpen(false)}
      >
        {label}
      </BaseLink>
      {isExternal && <Icon size={16} component={ArrowUpRight} color="subtle" />}
    </li>
  )
}
