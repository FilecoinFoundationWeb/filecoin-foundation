import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'
import { clsx } from 'clsx'

type linkWithIcon = {
  label: string
  href: string
  icon: IconProps['component']
}

type SocialProps = {
  linksWithIcons: linkWithIcon[]
  size?: IconProps['size']
  spreadIconLinks?: boolean
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
}

export function Social({
  linksWithIcons,
  size = 32,
  spreadIconLinks = false,
}: SocialProps) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center gap-6',
        spreadIconLinks && 'justify-between',
        TOUCH_TARGET.touchAreaOffset,
      )}
    >
      {linksWithIcons.map(({ label, href, icon }) => {
        return (
          <li key={label} className="inline-flex">
            <a
              aria-label={`Go to ${label}`}
              href={href}
              rel="noopener noreferrer"
              title={`Go to ${label}`}
              className={clsx(
                'social-link focus:brand-outline',
                TOUCH_TARGET.touchAreaPadding,
              )}
            >
              <Icon component={icon} size={size} weight="light" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
