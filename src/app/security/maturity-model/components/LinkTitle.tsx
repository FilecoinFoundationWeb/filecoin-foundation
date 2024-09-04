'use client'

import Link from 'next/link'

import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'
import { useIntersectionObserver } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

import {
  useSectionHashObserver,
  HASH_SIGN,
} from '../utils/useSectionHashObserver'

type LinkTitleProps = {
  title: string
  slug: string
}

export function LinkTitle({ title, slug }: LinkTitleProps) {
  const { updateSectionHash } = useSectionHashObserver()

  const { ref } = useIntersectionObserver({
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        updateSectionHash(slug)
      }
    },
  })

  const sectionHash = HASH_SIGN + slug

  return (
    <Link
      href={sectionHash as Route}
      className="group text-brand-100 hover:no-underline"
    >
      <h3 ref={ref} id={slug} className="flex items-center gap-2">
        {title}
        <span className="invisible group-hover:visible">
          <Icon component={LinkSimple} size={18} />
        </span>
      </h3>
    </Link>
  )
}
