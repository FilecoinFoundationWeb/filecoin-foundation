'use client'

import { useRef } from 'react'

import Link from 'next/link'

import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'
import { useIntersectionObserver } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

import { useUrlHash } from '../utils/useUrlHash'

type ArticleProps = {
  title: string
  slug: string
} & React.ComponentPropsWithoutRef<'article'>

export function Article({ title, slug, children }: ArticleProps) {
  const articleRef = useRef<HTMLElement | null>(null)
  const { updateHash, clearHashIfPresent, getHashFromSlug } = useUrlHash()
  const sectionHash = getHashFromSlug(slug)

  const { ref: observerCallback } = useIntersectionObserver({
    onChange: handleIntersection,
  })

  function setRef(element: HTMLElement | null) {
    articleRef.current = element
    observerCallback(element)
  }

  function handleIntersection(isIntersecting: boolean) {
    if (isIntersecting) {
      updateHash(slug)
    } else {
      clearHashIfPresent(slug)
    }
  }

  function handleArticleLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    if (!articleRef.current) {
      console.error('Element reference is not available')
      return
    }

    articleRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  return (
    <article ref={setRef}>
      <h3 id={slug}>
        <Link
          href={sectionHash as Route}
          className="group inline-flex items-center gap-2 text-brand-100 hover:no-underline"
          style={{ fontWeight: 'inherit' }}
          onClick={handleArticleLinkClick}
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
