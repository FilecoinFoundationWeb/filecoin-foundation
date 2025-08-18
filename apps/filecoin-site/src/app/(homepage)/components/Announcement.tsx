import Link from 'next/link'

import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui/Icon'

export type AnnouncementProps = {
  children: string
  href: string
}

export function Announcement({ children, href }: AnnouncementProps) {
  return (
    <Link href={href} aria-label={`${children} - Click to learn more`}>
      <div className="flex">
        <aside
          className="gap relative flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1"
          role="banner"
        >
          <span className="ml-4 font-medium text-zinc-50">{children}</span>
          <span className="ml-4 grid size-8 place-items-center rounded-full bg-zinc-800 text-zinc-200">
            <Icon component={ArrowRightIcon} size={16} />
          </span>
        </aside>
      </div>
    </Link>
  )
}
