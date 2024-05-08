import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { socialLinksWithIcons } from '@/utils/socialConfig'

const touchTarget = {
  class: 'p-2',
  offsetClass: '-m-2 sm:mx-0',
}

export function Social() {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center justify-between gap-4',
        touchTarget.offsetClass,
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
                'text-brand-100 outline-white hover:text-brand-400 focus:outline-2',
                touchTarget.class,
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
