import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { footerNavigationItems } from '@/_components/Navigation/constants/navigation'

export function NavigationItems() {
  return (
    <>
      {footerNavigationItems.map(({ title, items }) => (
        <div key={title} className="space-y-4">
          <span className="block text-sm font-medium">{title}</span>
          <ul className="flex flex-col gap-3">
            {items.map(({ href, label }) => (
              <li
                key={href}
                className="text-sm text-[var(--color-paragraph-text)]"
              >
                <SmartTextLink href={href} baseDomain={BASE_DOMAIN}>
                  {label}
                </SmartTextLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
