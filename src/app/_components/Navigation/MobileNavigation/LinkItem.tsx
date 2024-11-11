'use client'

import type { Dispatch, SetStateAction } from 'react'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { isExternalLink } from '@/utils/linkUtils'

import { BaseLink } from '@/components/BaseLink'
import { Icon } from '@/components/Icon'
import { linkBaseStyles } from '@/components/SmartTextLink'

export type LinkItemProps = {
  label: string
  href: Route | string
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function LinkItem({ label, href, nested, setOpen }: LinkItemProps) {
  const isExternal = isExternalLink(href)
  const containerStyles = clsx(
    nested && 'ml-6',
    isExternal && 'inline-flex items-center gap-1',
  )
  const linkStyles = clsx(
    linkBaseStyles,
    "relative before:absolute before:inset-0 before:-m-3.5 before:content-['']",
  )

  return (
    <li className={containerStyles}>
      <BaseLink
        href={href}
        className={linkStyles}
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
