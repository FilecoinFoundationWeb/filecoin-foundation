import CustomLink from '@/components/CustomLink'
import Logo from '@/components/Logo'

import navigationData from '@/content/shared/navigation.yml'

type NavigationItemProps = {
  order: number
  url: string
  title: string
}

function NavigationItem({ item }: { item: NavigationItemProps }) {
  return (
    <li className="mr-5 last:mr-0 whitespace-nowrap">
      <CustomLink href={item.url}>{item.title}</CustomLink>
    </li>
  )
}

export default function Navigation() {
  const sortedNavigationItems = navigationData.navigation_items.sort(
    (a: NavigationItemProps, b: NavigationItemProps) => a.order - b.order
  )

  return (
    <nav className="flex justify-between items-center p-4">
      <CustomLink className="block grow" href="/" aria-label="Go to homepage">
        <Logo />
        <span className="sr-only">Home</span>
      </CustomLink>
      <ul className="list-none flex items-center m-0 p-0">
        {sortedNavigationItems.map((item: NavigationItemProps) => (
          <NavigationItem key={item.url} item={item} />
        ))}
      </ul>
    </nav>
  )
}
