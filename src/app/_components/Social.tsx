import { clsx } from 'clsx'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { Icon } from '@/components/Icon'

const TOUCH_TARGET = {
  class: 'p-2',
  offsetClass: '-m-2 sm:mx-0',
}

export function Social() {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center justify-between gap-4',
        TOUCH_TARGET.offsetClass,
      )}
    >
      {socialLinksWithIcons.map(({ label, href, icon }) => {
        return (
          <li key={label} className="inline-flex">
            <a
              aria-label={`Go to ${label}`}
              href={href}
              rel="noopener noreferrer"
              title={`Go to ${label}`}
              className={clsx(
                'focus:brand-outline hover:text-brand-400',
                TOUCH_TARGET.class,
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
