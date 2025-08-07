import Link from 'next/link'

import { BLOG_PATHS } from '../constants/paths'

import RSSFeedIcon from '@/assets/logos/rss-feed-logo.svg'

export function RSSFeed() {
  return (
    <Link href={BLOG_PATHS.RSS} className="flex items-center gap-3">
      <RSSFeedIcon
        height={14}
        aria-label="RSS icon for Filecoin blog posts"
        aria-hidden="true"
        className="flex shrink-0"
      />
      <span className="text-zinc-500">Available in RSS</span>
    </Link>
  )
}
