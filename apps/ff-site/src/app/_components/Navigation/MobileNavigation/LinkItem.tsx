'use client'

import type { Dispatch, SetStateAction } from 'react'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { BaseLink } from '@/components/BaseLink'
import { Icon } from '@/components/Icon'

export type LinkItemProps = {
  label: string
  href: Route | string
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
        href={href}
        className="text-link relative before:absolute before:inset-0 before:-m-3.5 before:content-['']"
        onClick={() => setOpen(false)}
      >
        {label}
      </BaseLink>
      {isExternal && (
        <Icon size={16} component={ArrowUpRight} color="brand-400" />
      )}
    </li>
  )
}
