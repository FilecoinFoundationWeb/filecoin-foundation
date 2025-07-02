'use client'

import { clsx } from 'clsx'

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
        'flex flex-wrap items-center gap-2',
        TOUCH_TARGET.touchAreaOffset,
      )}
    >
      {socialLinksWithIcons.map(({ label, href, icon }) => (
        <li key={label} className="inline-flex">
          <Tooltip description={`Share on ${label}`} side="bottom">
            <a
              aria-label={`Share ${articleTitle} on ${label}`}
              href={href}
              rel="noopener noreferrer"
              className={clsx(
                'focus:brand-outline text-zinc-900',
                TOUCH_TARGET.touchAreaPadding,
              )}
            >
              <Icon component={icon} size={32} />
            </a>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
