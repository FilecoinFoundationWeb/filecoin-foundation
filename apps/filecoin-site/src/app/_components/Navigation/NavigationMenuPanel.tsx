import { type ExpandedNavItem } from '@/constants/navigation'

import { NavigationMenuLink } from './NavigationMenuLink'

type NavigationMenuPanelProps = {
  items: ExpandedNavItem['items']
}

export function NavigationMenuPanel({ items }: NavigationMenuPanelProps) {
  return (
    <div className="flex gap-4 divide-x divide-[var(--color-border)]">
      {items.map((item) => (
        <div key={item.title}>
          <p className="mb-2 px-4 text-sm text-[var(--color-text-paragraph)]">
            {item.title}
          </p>
          <ul
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${Math.floor(item.links.length / 2)}, minmax(0, 1fr))`,
            }}
          >
            {item.links.map((link) => (
              <NavigationMenuLink key={link.href} {...link} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
