'use client'

import type { Dispatch, SetStateAction } from 'react'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { isExternalLink } from '@/utils/linkUtils'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'
import { linkBaseStyles } from '@/components/TextLink'

export type LinkItemProps = {
  label: string
  href: Route | string
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function LinkItem({ label, href, nested, setOpen }: LinkItemProps) {
  const isExternal = isExternalLink(href)

  return (
    <li
      className={clsx(
        'text-brand-300',
        nested && 'ml-6',
        isExternal && 'inline-flex items-center gap-1',
      )}
    >
      <CustomLink
        href={href}
        className={clsx(
          linkBaseStyles,
          "relative before:absolute before:inset-0 before:-m-3.5 before:content-['']",
        )}
        onClick={() => setOpen(false)}
      >
        {label}
      </CustomLink>
      {isExternal && (
        <Icon size={16} component={ArrowUpRight} color="brand-400" />
      )}
    </li>
  )
}