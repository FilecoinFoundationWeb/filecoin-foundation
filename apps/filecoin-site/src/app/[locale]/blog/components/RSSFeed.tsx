'use client'

import { useLocale } from 'next-intl'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

import { getBlogRSSPath } from '@/constants/paths'

import RSSFeedIcon from '@/assets/logos/rss.svg'

export function RSSFeed() {
  const locale = useLocale()

  return (
    <a
      href={getBlogRSSPath(locale)}
      className="focus:brand-outline flex items-center gap-3"
    >
      <Icon component={RSSFeedIcon} size={14} aria-hidden="true" />
      <span className="text-(--color-paragraph-text-subtle)">RSS</span>
    </a>
  )
}
