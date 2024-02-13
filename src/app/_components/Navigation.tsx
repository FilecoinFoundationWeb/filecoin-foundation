import Logo from '@/components/Logo'
import { TextLink } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'

type NavigationItem = {
  title: string
  path: string
  order: number
}

const navigationItems = [
  { title: 'About', path: PATHS.ABOUT, order: 1 },
  { title: 'Blog', path: PATHS.BLOG, order: 2 },
  { title: 'Governance', path: PATHS.GOVERNANCE, order: 3 },
  { title: 'Ecosystem', path: PATHS.ECOSYSTEM, order: 4 },
  { title: 'Case Studies', path: PATHS.CASE_STUDIES, order: 5 },
  { title: 'Grants', path: PATHS.GRANTS, order: 6 },
  { title: 'Get Involved', path: PATHS.GET_INVOLVED, order: 7 },
  { title: 'Public Data', path: PATHS.PUBLIC_DATA, order: 8 },
  { title: 'Awards', path: PATHS.PUBLIC_DATA_AWARDS, order: 9 },
  { title: 'Events', path: PATHS.EVENTS, order: 10 },
]

const sortedNavigationItems = navigationItems.sort((a, b) => a.order - b.order)

function NavigationItem({ item }: { item: NavigationItem }) {
  return (
    <li className="mr-5 last:mr-0 whitespace-nowrap">
      <TextLink href={item.path}>{item.title}</TextLink>
    </li>
  )
}

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4">
      <TextLink className="block grow" href="/" aria-label="Go to homepage">
        <Logo />
        <span className="sr-only">Home</span>
      </TextLink>
      <ul className="list-none flex items-center m-0 p-0">
        {sortedNavigationItems.map((item: NavigationItem) => (
          <NavigationItem key={item.path} item={item} />
        ))}
      </ul>
    </nav>
  )
}
