import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { footerNavigationItems } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

export function Navigation() {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
    >
      {Object.entries(footerNavigationItems).map(([title, items]) => (
        <div key={title} className="space-y-4">
          <span className="block text-sm font-medium text-zinc-50">
            {title}
          </span>
          <ul className="flex flex-col gap-3">
            {items.map(({ href, label }) => (
              <li key={href} className="text-sm text-zinc-400">
                <SmartTextLink href={href} baseDomain={BASE_DOMAIN}>
                  {label}
                </SmartTextLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
