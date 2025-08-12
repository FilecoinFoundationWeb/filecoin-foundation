import Link from 'next/link'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { BLOG_PATHS } from '@/constants/paths'

import RSSFeedIcon from '@/assets/logos/rss.svg'

export function RSSFeed() {
  return (
    <Link
      href={BLOG_PATHS.RSS}
      className="focus:brand-outline flex items-center gap-3"
    >
      <Icon component={RSSFeedIcon} size={14} aria-hidden="true" />
      <span className="text-zinc-500">Available in RSS</span>
    </Link>
  )
}
