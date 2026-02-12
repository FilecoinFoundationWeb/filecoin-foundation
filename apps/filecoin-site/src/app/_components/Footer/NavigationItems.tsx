import { getTranslations } from 'next-intl/server'

import { SmartTextLink } from '@filecoin-foundation/ui-filecoin/TextLink/SmartTextLink'

import { getFooterNavigationItems } from '../Navigation/constants/navigation'

export async function NavigationItems() {
  const t = await getTranslations('navigation')

  return (
    <>
      {getFooterNavigationItems(t).map(({ title, items }) => (
        <div key={title} className="space-y-4">
          <span className="block text-sm font-medium">{title}</span>
          <ul className="flex flex-col gap-3">
            {items.map(({ href, label }) => (
              <li
                key={href}
                className="text-sm/5 text-(--color-paragraph-text)"
              >
                <SmartTextLink href={href}>{label}</SmartTextLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
