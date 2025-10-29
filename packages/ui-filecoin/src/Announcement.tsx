import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { BaseLink } from './BaseLink'

export type AnnouncementProps = {
  baseDomain: string
  centered?: boolean
  href: string
  children: string
}

export function Announcement({
  baseDomain,
  centered,
  href,
  children,
}: AnnouncementProps) {
  return (
    <div className={clsx('group flex', centered && 'justify-center')}>
      <BaseLink
        baseDomain={baseDomain}
        href={href}
        aria-label={`${children} - Click to learn more`}
        className="group focus:brand-outline rounded-full"
      >
        <div className="gap relative flex items-center rounded-full border border-[var(--color-announcement-border)] bg-[var(--color-announcement-background)] p-1 group-hover:bg-[var(--color-announcement-background-hover)] group-focus:bg-[var(--color-announcement-background-hover)]">
          <span className="ml-4 text-sm font-medium sm:text-base">
            {children}
          </span>
          <span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-announcement-icon-background)] text-[--color-announcement-icon] group-hover:bg-[var(--color-announcement-icon-background-hover)] group-focus:bg-[var(--color-announcement-icon-background-hover)]">
            <Icon component={ArrowRightIcon} size={16} />
          </span>
        </div>
      </BaseLink>
    </div>
  )
}
