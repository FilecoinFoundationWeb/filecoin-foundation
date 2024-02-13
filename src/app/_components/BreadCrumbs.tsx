'use client'

import { usePathname } from 'next/navigation'

import { TextLink } from '@/components/TextLink'

export default function BreadCrumbs() {
  const pathname = usePathname()
  const pathNames = pathname.split('/').filter((path) => path)

  const formatLabel = (path: string) => {
    let label = path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const maxLength = 20
    if (label.length > maxLength) {
      label = label.substring(0, maxLength) + '...'
    }
    return label
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex gap-2.5 h-5">
        <li className="m-0">
          <TextLink href={'/'}>Home</TextLink>
        </li>
        {pathNames.map((path, index) => {
          const href = '/' + pathNames.slice(0, index + 1).join('/')
          const itemClasses = `${pathname === href ? 'active' : ''}`
          const label = formatLabel(path)

          return (
            <li key={href} className="flex gap-2.5 m-0">
              <span>{'/'}</span>
              <TextLink className={itemClasses} href={href}>
                {label}
              </TextLink>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
