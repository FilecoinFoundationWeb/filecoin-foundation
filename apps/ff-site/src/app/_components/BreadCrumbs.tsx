'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { PATHS } from '@/constants/paths'

import { capitalize } from '@/utils/capitalize'

export function BreadCrumbs() {
  const pathname = usePathname()
  const pathNames = ['/'].concat(pathname.split('/').filter(Boolean))

  const formatLabel = (path: string) => {
    let label = path
      .split('-')
      .map((word) => capitalize(word))
      .join(' ')

    const maxLength = 20
    if (label.length > maxLength) {
      label = `${label.substring(0, maxLength).trimEnd()}...`
    }
    return label
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="inline-flex items-center gap-2.5">
        {pathNames.map((path, index) => {
          const isRoot = index === 0
          const href = isRoot
            ? PATHS.HOME.path
            : (('/' + pathNames.slice(1, index + 1).join('/')) as Route)
          const isActive = pathname === href
          const itemClasses = clsx('hover:underline focus:brand-outline', {
            'text-brand-300': !isActive,
            'text-brand-400': isActive,
          })
          const label = isRoot ? PATHS.HOME.label : formatLabel(path)

          return (
            <li key={href} className="inline-flex items-center gap-2.5">
              {!isRoot && (
                <Icon
                  component={CaretRight}
                  size={20}
                  color="subtle"
                  weight="bold"
                />
              )}
              <Link className={itemClasses} href={href}>
                {label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
