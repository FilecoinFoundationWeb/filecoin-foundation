'use client'

import { clsx } from 'clsx'

import { CopyToClipboard } from '@filecoin-foundation/ui/CopyToClipboard'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { Tooltip } from '@filecoin-foundation/ui/Tooltip/Tooltip'
import { generateShareArticleLinks } from '@filecoin-foundation/utils/generateShareArticleLinks'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

type SharePostProps = {
  articleTitle: string
  path: string
  baseUrl: string
  sectionTitle?: string
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
}

export function SharePost({ articleTitle, path, baseUrl }: SharePostProps) {
  const articleUrl = `${baseUrl}${path}`

  const socialLinksWithIcons = generateShareArticleLinks({
    URL: articleUrl,
    title: articleTitle,
    BASE_URL: baseUrl,
    platforms: ['facebook', 'linkedin', 'x'],
  })

  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center gap-1.5',
        TOUCH_TARGET.touchAreaOffset,
      )}
    >
      <li className={TOUCH_TARGET.touchAreaPadding}>
        <CopyToClipboard
          iconSize={20}
          text={articleUrl}
          notificationTitle="Link copied to clipboard!"
          ariaLabel={`Copy post link: ${articleTitle}`}
        />
      </li>
      {socialLinksWithIcons.map(({ label, href, icon }) => (
        <li
          key={label}
          className={clsx('inline-flex', TOUCH_TARGET.touchAreaPadding)}
        >
          <Tooltip description={`Share on ${label}`} side="bottom">
            <a
              aria-label={`Share ${articleTitle} on ${label}`}
              href={href}
              rel="noopener noreferrer"
              className="focus:brand-outline social-link"
            >
              <Icon component={icon} size={20} />
            </a>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
