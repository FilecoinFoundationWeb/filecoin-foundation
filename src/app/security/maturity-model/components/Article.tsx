import React, { forwardRef } from 'react'

import Link from 'next/link'

import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import type { Route } from 'next'
import { useIntersectionObserver } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

type ArticleProps = {
  title: string
  slug: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'article'>

function ArticleComponent(
  { title, slug, children }: ArticleProps,
  ref: React.Ref<HTMLElement>,
) {
  const { updateHash, clearHashIfPresent, getHashFromSlug } = useUrlHash()

  const { ref: observerRef } = useIntersectionObserver({
    onChange: (isIntersecting) => {
      isIntersecting ? updateHash(slug) : clearHashIfPresent(slug)
    },
  })

  function combinedRef(node: HTMLElement | null) {
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
    }
    observerRef(node)
  }

  const sectionHash = getHashFromSlug(slug)

  return (
    <article ref={combinedRef}>
      <h3 id={slug}>
        <Link
          href={sectionHash as Route}
          className="group inline-flex items-center gap-2 text-brand-100 hover:no-underline"
          style={{ fontWeight: 'inherit' }}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            if (ref && 'current' in ref) {
              scrollToSection({ sectionRef: ref })
            }
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

export const Article = forwardRef<HTMLElement, ArticleProps>(ArticleComponent)
