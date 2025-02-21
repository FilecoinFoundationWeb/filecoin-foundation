'use client'

import { clsx } from 'clsx'

import type { TouchTarget } from '@/types/touchTargetType'

import { BASE_URL } from '@/constants/siteMetadata'

import { generateShareArticleLinks } from '@/utils/generateShareArticleLinks'

import { CopyToClipboard } from '@/components/CopyToClipboard'
import { Icon } from '@/components/Icon'
import { Tooltip } from '@/components/Tooltip/Tooltip'

type ShareArticleProps = {
  articleTitle: string
  path: string
  sectionTitle?: string
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
}

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
        className={clsx(
          'flex flex-wrap items-center gap-6',
          TOUCH_TARGET.touchAreaOffset,
        )}
      >
        <li>
          <CopyToClipboard
            text={articleUrl}
            notificationTitle="Link copied to clipboard!"
          />
        </li>
        {socialLinksWithIcons.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <Tooltip description={`Share on ${label}`} side="bottom">
              <a
                aria-label={`Share on ${label}`}
                href={href}
                rel="noopener noreferrer"
                className={clsx(
                  'focus:brand-outline hover:text-brand-400',
                  TOUCH_TARGET.touchAreaPadding,
                )}
              >
                <Icon component={icon} size={32} weight="light" />
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  )
}
