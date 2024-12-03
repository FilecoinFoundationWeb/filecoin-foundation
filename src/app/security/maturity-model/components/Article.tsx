'use client'

import React from 'react'

import Link from 'next/link'

import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'
import { useIntersectionObserver } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

import { useUrlHash } from '../utils/useUrlHash'

type ArticleProps = {
  title: string
  slug: string
  children: React.ReactNode
  setRef: (slug: string, element: HTMLElement | null) => void
  scrollToSection: (slug: string) => void
} & React.ComponentPropsWithoutRef<'article'>

export function Article({
  title,
  slug,
  children,
  setRef,
  scrollToSection,
}: ArticleProps) {
  const { updateHash, clearHashIfPresent, getHashFromSlug } = useUrlHash()

  const { ref: setHookRef } = useIntersectionObserver({
    onChange: (isIntersecting) => {
      isIntersecting ? updateHash(slug) : clearHashIfPresent(slug)
    },
  })

  function setRefs(node: HTMLElement | null) {
    setRef(slug, node)
    setHookRef(node)
  }

  const sectionHash = getHashFromSlug(slug)

  return (
    <article ref={setRefs}>
      <h3 id={slug}>
        <Link
          href={sectionHash as Route}
          className="group inline-flex items-center gap-2 text-brand-100 hover:no-underline"
          style={{ fontWeight: 'inherit' }}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            scrollToSection(slug)
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
