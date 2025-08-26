import { type ExpandedNavItem } from '@/constants/navigation'

import { NavigationMenuLink } from './NavigationMenuLink'

type NavigationMenuPanelProps = {
  items: ExpandedNavItem['items']
}

export function NavigationMenuPanel({ items }: NavigationMenuPanelProps) {
  return (
    <div className="flex divide-x divide-[var(--color-border-base)]">
      {items.map((item) => (
        <div key={item.title} className="px-4">
          <p className="mb-2 px-4 text-sm text-[var(--color-paragraph-text)]">
            {item.title}
          </p>
          <ul className="grid grid-flow-col grid-rows-2 gap-4 py-2">
            {item.links.map((link) => (
              <li key={link.href}>
                <NavigationMenuLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
