'use client'

import { clsx } from 'clsx'

import { CopyToClipboard } from '@filecoin-foundation/ui/CopyToClipboard'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { Tooltip } from '@filecoin-foundation/ui/Tooltip/Tooltip'
import { generateShareArticleLinks } from '@filecoin-foundation/utils/generateShareArticleLinks'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'


type ShareArticleProps = {
  articleTitle: string
  path: string
  baseUrl: string
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
  baseUrl,
}: ShareArticleProps) {
  const articleUrl = `${baseUrl}${path}`

  const socialLinksWithIcons = generateShareArticleLinks({
    URL: articleUrl,
    title: articleTitle,
    BASE_URL: baseUrl,
  })

  return (
    <div className="space-y-3">
      <p className="share-article-title font-bold capitalize">{sectionTitle}</p>
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
            ariaLabel={`Copy article link: ${articleTitle}`}
          />
        </li>
        {socialLinksWithIcons.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <Tooltip description={`Share on ${label}`} side="bottom">
              <a
                aria-label={`Share ${articleTitle} on ${label}`}
                href={href}
                rel="noopener noreferrer"
                className={clsx(
                  'social-link focus:brand-outline',
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
