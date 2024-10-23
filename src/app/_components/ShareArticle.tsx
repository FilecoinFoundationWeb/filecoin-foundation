'use client'

import { clsx } from 'clsx'

import { BASE_URL } from '@/constants/siteMetadata'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'
import { touchTarget } from '@/components/Social'

import { generateSharePostLinks } from '@/blog/[slug]/utils/generateSharePostLinks'

type ShareArticleProps = {
  sectionTitle: string
  postTitle: string
}

export function ShareArticle({ sectionTitle, postTitle }: ShareArticleProps) {
  const socialMediaIcons = generateSharePostLinks(BASE_URL, postTitle)

  return (
    <div className="space-y-3 font-bold">
      <p className="capitalize text-brand-300">{sectionTitle}</p>
      <ul className="flex w-full gap-6">
        {socialMediaIcons.map(({ icon, href, label }) => (
          <li key={label}>
            <CustomLink
              href={href}
              className={clsx(
                'inline-block hover:text-brand-400',
                touchTarget.class,
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
