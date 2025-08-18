import Link from 'next/link'

import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'

export type AnnouncementProps = {
  centered?: boolean
  children: string
  href: string
}

export function Announcement({ children, href, centered }: AnnouncementProps) {
  return (
    <Link
      className={clsx('flex', centered && 'justify-center')}
      href={href}
      aria-label={`${children} - Click to learn more`}
    >
      <aside
        className="gap relative flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1"
        role="banner"
      >
        <span className="ml-4 text-sm font-medium text-zinc-50 sm:text-base">
          {children}
        </span>
        <span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full bg-zinc-800 text-zinc-200">
          <Icon component={ArrowRightIcon} size={16} />
        </span>
      </aside>
    </Link>
  )
}
