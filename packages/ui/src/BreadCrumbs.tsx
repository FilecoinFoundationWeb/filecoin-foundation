import type { ReactElement, ReactNode } from 'react'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { capitalize, truncate } from '@filecoin-foundation/utils/stringUtils'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

type LinkProps = {
  href: string
  className: string
  children: ReactNode
}

type BreadCrumbsProps = {
  currentPath: string
  homePath: string
  homeLabel: string
  renderLink: (props: LinkProps) => ReactElement
}

export function BreadCrumbs({
  currentPath,
  homePath,
  homeLabel,
  renderLink,
}: BreadCrumbsProps) {
  const pathNames = ['/'].concat(currentPath.split('/').filter(Boolean))

  return (
    <nav aria-label="breadcrumbs">
      <ol className="inline-flex items-center gap-2.5">
        {pathNames.map((path, index) => {
          const isRoot = index === 0
          const href = isRoot
            ? homePath
            : '/' + pathNames.slice(1, index + 1).join('/')

          const isActive = currentPath === href
          const itemClasses = clsx('focus:brand-outline hover:underline', {
            'text-brand-300': !isActive,
            'text-brand-400': isActive,
          })

          const label = isRoot ? capitalize(homeLabel) : formatLabel(path)

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
              {renderLink({ href, className: itemClasses, children: label })}
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
