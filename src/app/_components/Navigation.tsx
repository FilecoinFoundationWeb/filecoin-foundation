import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { TextLink } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'

const navigationItems = [
  PATHS.ABOUT,
  PATHS.GOVERNANCE,
  PATHS.ECOSYSTEM,
  PATHS.BLOG,
]

function NavigationLink({ label, path }: { label: string; path: string }) {
  return (
    <li className="whitespace-nowrap last:mr-0">
      <TextLink href={path}>{label}</TextLink>
    </li>
  )
}

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 md:items-center">
      <Link
        className="flex-shrink-0 outline-white focus:outline-2"
        href={PATHS.HOME.path}
        aria-label="Go to homepage"
      >
        <Logo />
        <span className="sr-only">Home</span>
      </Link>

      <MobileNavigation />

      <ul className="hidden gap-5 lg:flex">
        {navigationItems.map((item) => (
          <NavigationLink key={item.path} label={item.label} path={item.path} />
        ))}
      </ul>
    </nav>
  )
}
