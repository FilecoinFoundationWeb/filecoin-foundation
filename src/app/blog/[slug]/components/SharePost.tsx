'use client'

import { clsx } from 'clsx'

import { BASE_URL } from '@/constants/siteMetadata'

import { Icon } from '@/components/Icon'
import { touchTarget } from '@/components/Social'

import { getSharePostSocialIcons } from '../utils/getSharePostSocialIcons'

type SharePostProps = {
  title: string
  postTitle: string
}

export function SharePost({ title, postTitle }: SharePostProps) {
  const socialMediaIcons = getSharePostSocialIcons(BASE_URL, postTitle)

  return (
    <div className="space-y-3 font-bold">
      <p className="text-brand-300">{title}</p>
      <ul className="flex w-full gap-6">
        {socialMediaIcons.map(({ icon, href, label }, key) => (
          <li key={key}>
            <a
              href={href}
              title={label}
              rel="noopener noreferrer"
              className={clsx(
                'inline-block hover:text-brand-400',
                touchTarget.class,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
              <span className="sr-only">{`Share on ${label}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
