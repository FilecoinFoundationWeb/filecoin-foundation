import Link from 'next/link'

import type { Route } from 'next'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { BLOG_RSS_PATH } from '@/constants/paths'

import RSSFeedIcon from '@/assets/logos/rss.svg'

export function RSSFeed() {
  return (
    <Link
      href={BLOG_RSS_PATH as Route}
      className="focus:brand-outline flex items-center gap-3"
    >
      <Icon component={RSSFeedIcon} size={14} aria-hidden="true" />
      <span className="text-[var(--color-paragraph-text-subtle)]">
        Available in RSS
      </span>
    </Link>
  )
}
