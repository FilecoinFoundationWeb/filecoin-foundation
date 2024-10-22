'use client'

import type { Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { isExternalLink } from '@/utils/linkUtils'

import { Icon } from '@/components/Icon'
import { linkBaseStyles } from '@/components/TextLink'

export type LinkItemProps = {
  label: string
  path: Route
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function LinkItem({ label, path, nested, setOpen }: LinkItemProps) {
  const isExternal = isExternalLink(path)

  return (
    <li
      className={clsx(
        'text-brand-300',
        nested && 'ml-6',
        isExternal && 'inline-flex items-center gap-1',
      )}
    >
      <Link
        href={path}
        className={clsx(
          linkBaseStyles,
          "relative before:absolute before:inset-0 before:-m-3.5 before:content-['']",
        )}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
      {isExternal && (
        <Icon size={16} component={ArrowUpRight} color="brand-400" />
      )}
    </li>
  )
}
