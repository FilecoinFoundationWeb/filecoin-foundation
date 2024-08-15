import { clsx } from 'clsx'

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
              href={href}
              rel="noopener noreferrer"
              title={label}
              className={clsx(
                'text-brand-100 focus:brand-outline hover:text-brand-400',
                touchTarget.class,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
