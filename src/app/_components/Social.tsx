import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { socialLinksWithIcons } from '@/utils/socialConfig'

const touchTarget = {
  class: 'p-2',
  offsetClass: '-m-2 sm:mx-0',
}

type SocialProps = {
  justify?: 'start' | 'between'
}

export function Social({ justify = 'between' }: SocialProps) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center gap-4',
        justify === 'start' && 'justify-start',
        justify === 'between' && 'justify-between',
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
