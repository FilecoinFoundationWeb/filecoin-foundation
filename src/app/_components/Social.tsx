import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { socialLinksWithIcons } from '@/utils/socialConfig'

const touchTargetSpacing = 2
const touchTargetClass = `p-${touchTargetSpacing}`
const touchTargetOffsetClass = `-m-${touchTargetSpacing} sm:mx-0`

export function Social() {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center justify-between gap-4 sm:px-8',
        touchTargetOffsetClass,
      )}
    >
      {socialLinksWithIcons.map(({ label, href, icon }, key) => {
        return (
          <li key={key} className="inline-flex">
            <a
              aria-label={`${label} (opens in new window)`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'text-brand-100 outline-white hover:text-brand-500 focus:outline-2',
                touchTargetClass,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
