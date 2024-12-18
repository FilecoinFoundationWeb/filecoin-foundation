'use client'

import { clsx } from 'clsx'

import { BASE_URL } from '@/constants/siteMetadata'

import { generateShareArticleLinks } from '@/utils/generateShareArticleLinks'
import { getTouchTargetStyles } from '@/utils/getTouchTargetStyles'

import { CopyToClipboard } from '@/components/CopyToClipboard'
import { Icon } from '@/components/Icon'

type ShareArticleProps = {
  articleTitle: string
  path: string
  sectionTitle?: string
}

const { touchAreaOffset, touchAreaPadding } =
  getTouchTargetStyles('shareArticle')

export function ShareArticle({
  articleTitle,
  path,
  sectionTitle = 'Share Article',
}: ShareArticleProps) {
  const articleUrl = `${BASE_URL}${path}`

  const socialLinksWithIcons = generateShareArticleLinks(
    articleUrl,
    articleTitle,
  )

  return (
    <div className="space-y-3">
      <p className="font-bold capitalize text-brand-300">{sectionTitle}</p>
      <ul
        className={clsx('flex flex-wrap items-center gap-6', touchAreaOffset)}
      >
        <CopyToClipboard
          text={articleUrl}
          notificationTitle="Link copied to clipboard!"
        />
        {socialLinksWithIcons.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <a
              aria-label={`Share on ${label}`}
              href={href}
              rel="noopener noreferrer"
              title={`Share on ${label}`}
              className={clsx(
                'focus:brand-outline hover:text-brand-400',
                touchAreaPadding,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
