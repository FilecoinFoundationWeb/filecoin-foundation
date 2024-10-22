'use client'

import { useEffect, useState } from 'react'

import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'
import { touchTarget } from '@/components/Social'

import { getSharePostSocialIcons } from '../utils/getSharePostSocialIcons'

type SharePostProps = {
  title: string
  postTitle: string
}

export function SharePost({ title, postTitle }: SharePostProps) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const socialMediaIcons = getSharePostSocialIcons(currentUrl, postTitle)

  return (
    <div className="space-y-3 font-bold">
      <p className="text-brand-300">{title}</p>
      <ul className={clsx('flex w-full gap-6', touchTarget.offsetClass)}>
        {socialMediaIcons.map(({ icon, href, label }, key) => (
          <li key={key}>
            <a
              href={href}
              className="hover:text-brand-400"
              title={label}
              rel="noopener noreferrer"
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
