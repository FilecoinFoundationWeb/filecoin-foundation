import { Link } from '@/i18n/navigation'

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
    <div className={clsx('group flex', centered && 'justify-center')}>
      <Link
        href={href}
        aria-label={`${children} - Click to learn more`}
        className="group focus:brand-outline rounded-full"
      >
        <aside className="gap relative flex items-center rounded-full border border-[var(--color-announcement-border)] bg-[var(--color-announcement-background)] p-1 group-hover:bg-[var(--color-announcement-background-hover)] group-focus:bg-[var(--color-announcement-background-hover)]">
          <span className="ml-4 text-sm font-medium sm:text-base">
            {children}
          </span>
          <span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-announcement-icon-background)] text-[--color-announcement-icon] group-hover:bg-[var(--color-announcement-icon-background-hover)] group-focus:bg-[var(--color-announcement-icon-background-hover)]">
            <Icon component={ArrowRightIcon} size={16} />
          </span>
        </aside>
      </Link>
    </div>
  )
}
