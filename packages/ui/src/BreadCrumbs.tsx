'use client'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { capitalize, truncate } from '@filecoin-foundation/utils/stringUtils'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type { Route } from 'next'

const HOME_PATH = '/'
const HOME_LABEL = 'Home'

const gapMap = {
  small: 'gap-1.5',
  default: 'gap-2',
  large: 'gap-2.5',
}

type BreadCrumbsProps = {
  gap?: keyof typeof gapMap
}

export function BreadCrumbs({ gap = 'default' }: BreadCrumbsProps) {
  const pathname = usePathname()
  const pathNames = ['/'].concat(pathname.split('/').filter(Boolean))

  return (
    <nav aria-label="breadcrumbs">
      <ol className={clsx(gapMap[gap], 'inline-flex items-center')}>
        {pathNames.map((path, index) => {
          const isRoot = index === 0

          const href = isRoot
            ? HOME_PATH
            : '/' + pathNames.slice(1, index + 1).join('/')

          const isActive = pathname === href
          const label = isRoot ? capitalize(HOME_LABEL) : formatLabel(path)

          return (
            <li
              key={href}
              className={clsx(gapMap[gap], 'inline-flex items-center')}
            >
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
                aria-current={isActive && 'page'}
                className="breadcrumb-link"
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
