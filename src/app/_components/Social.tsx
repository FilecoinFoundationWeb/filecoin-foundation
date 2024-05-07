import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { socialLinksWithIcons } from '@/utils/socialConfig'

const touchTargetSpacing = 2
const touchTargetClass = `p-${touchTargetSpacing}`
const touchTargetOffsetClass = `-m-${touchTargetSpacing} sm:mx-0`

type SocialProps = {
  justify?: 'left' | 'between'
}

export function Social({ justify = 'between' }: SocialProps) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center gap-4',
        justify === 'between' && 'justify-between',
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
                'text-brand-100 outline-white hover:text-brand-400 focus:outline-2',
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
