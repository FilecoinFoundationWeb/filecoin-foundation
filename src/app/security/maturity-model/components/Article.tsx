'use client'

import Link from 'next/link'

import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'
import { useIntersectionObserver } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

import { useUrlHash, HASH_SIGN } from '../utils/useUrlHash'

type LinkTitleProps = {
  title: string
  slug: string
} & React.ComponentPropsWithoutRef<'article'>

export function Article({ title, slug, children }: LinkTitleProps) {
  const { updateHash, clearHashIfPresent } = useUrlHash()

  const { ref } = useIntersectionObserver({
    onChange: (isIntersecting) => {
      isIntersecting ? updateHash(slug) : clearHashIfPresent(slug)
    },
  })

  const sectionHash = HASH_SIGN + slug

  return (
    <article ref={ref}>
      <h3 id={slug}>
        <Link
          href={sectionHash as Route}
          className="group inline-flex items-center gap-2 text-brand-100 hover:no-underline"
          style={{
            fontWeight: 'inherit',
          }}
        >
          {title}
          <span className="invisible group-hover:visible">
            <Icon component={LinkSimple} size={18} />
          </span>
        </Link>
      </h3>
      {children}
    </article>
  )
}
