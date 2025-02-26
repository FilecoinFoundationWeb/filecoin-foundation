'use client'

import Link from 'next/link'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { capitalize, truncate } from '@filecoin-foundation/utils/stringUtils'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'

const HOME_PATH = '/'
const HOME_LABEL = 'Home'

export function BreadCrumbs() {
  const pathname = usePathname()
  const pathNames = ['/'].concat(pathname.split('/').filter(Boolean))

  return (
    <nav aria-label="breadcrumbs">
      <ol className="inline-flex items-center gap-2.5">
        {pathNames.map((path, index) => {
          const isRoot = index === 0

          const href = isRoot
            ? HOME_PATH
            : '/' + pathNames.slice(1, index + 1).join('/')

          const isActive = pathname === href
          const label = isRoot ? capitalize(HOME_LABEL) : formatLabel(path)

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
              <Link
                href={href as Route}
                className={clsx(
                  'breadcrumbs-base',
                  !isActive && 'breadcrumbs-inactive',
                  isActive && 'breadcrumbs-active',
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function formatLabel(path: string) {
  const MAX_LABEL_LENGTH = 20

  const label = path.split('-').map(capitalize).join(' ')
  return truncate(label, MAX_LABEL_LENGTH)
}
