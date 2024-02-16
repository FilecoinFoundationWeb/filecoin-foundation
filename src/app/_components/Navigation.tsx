import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { TextLink } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'

const navigationItems = [
  PATHS.ABOUT,
  PATHS.BLOG,
  PATHS.GOVERNANCE,
  PATHS.ECOSYSTEM,
  PATHS.CASE_STUDIES,
  PATHS.GRANTS,
  PATHS.GET_INVOLVED,
  PATHS.PUBLIC_DATA,
  PATHS.PUBLIC_DATA_AWARDS,
  PATHS.EVENTS,
]

function NavigationLink({ label, path }: { label: string; path: string }) {
  return (
    <li className="mr-5 last:mr-0 whitespace-nowrap">
      <TextLink href={path}>{label}</TextLink>
    </li>
  )
}

export function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link
        className="block flex-shrink-0 mr-12"
        href="/"
        aria-label="Go to homepage"
      >
        <Logo />
        <span className="sr-only">Home</span>
      </Link>
      <ul className="list-none flex items-center m-0 p-0">
        {navigationItems.map((item) => (
          <NavigationLink key={item.path} label={item.label} path={item.path} />
        ))}
      </ul>
    </nav>
  )
}
