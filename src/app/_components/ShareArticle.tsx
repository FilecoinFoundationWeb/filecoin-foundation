'use client'

import { clsx } from 'clsx'

import { BASE_URL } from '@/constants/siteMetadata'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import { generateSharePostLinks } from '@/blog/[slug]/utils/generateSharePostLinks'

type ShareArticleProps = {
  articleTitle: string
  path: string
  sectionTitle?: string
}

const TOUCH_TARGET = {
  class: 'p-2',
  offsetClass: '-m-2',
}

export function ShareArticle({
  articleTitle,
  path,
  sectionTitle = 'Share Article',
}: ShareArticleProps) {
  const socialLinksWithIcons = generateSharePostLinks(
    `${BASE_URL}${path}`,
    articleTitle,
  )

  return (
    <div className="space-y-3">
      <p className="font-bold capitalize text-brand-300">{sectionTitle}</p>
      <ul
        className={clsx(
          'flex flex-wrap items-center gap-6',
          TOUCH_TARGET.offsetClass,
        )}
      >
        {socialLinksWithIcons.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <CustomLink
              href={href}
              className={clsx(
                'focus:brand-outline hover:text-brand-400',
                TOUCH_TARGET.class,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
              <span className="sr-only">{`Share on ${label}`}</span>
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
