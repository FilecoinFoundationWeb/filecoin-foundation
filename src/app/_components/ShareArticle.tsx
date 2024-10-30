'use client'

import { BASE_URL } from '@/constants/siteMetadata'

import { generateShareArticleLinks } from '@/utils/generateShareArticleLinks'

import { CopyToClipboard } from '@/components/CopyToClipboard'
import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

type ShareArticleProps = {
  articleTitle: string
  path: string
  sectionTitle?: string
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
      <ul className="offset-touch-target flex flex-wrap items-center gap-6">
        <CopyToClipboard text={articleUrl} />
        {socialLinksWithIcons.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <CustomLink
              href={href}
              className="touch-target focus:brand-outline hover:text-brand-400"
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
