import Link from 'next/link'

import RSSFeedIcon from '@/assets/logos/rss-feed-logo.svg'

export function RSSFeed() {
  return (
    <Link href="/blog/rss.xml" className="flex items-center gap-3">
      <RSSFeedIcon
        height={14}
        aria-label="RSS icon for Filecoin blog posts"
        aria-hidden="true"
        className="logo-section-logo-item max-w-full"
      />
      <span className="text-zinc-500">Available in RSS</span>
    </Link>
  )
}
