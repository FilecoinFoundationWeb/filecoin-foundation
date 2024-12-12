'use client'

import { type Components } from 'react-markdown'
import slugify from 'slugify'
import { useIntersectionObserver } from 'usehooks-ts'

import { useUrlHash } from '@/security/maturity-model/utils/useUrlHash'

export const H2WithObserver: Components['h2'] = ({ children }) => {
  const slug = slugify(String(children), { lower: true, strict: true })

  const { updateHash, clearHashIfPresent } = useUrlHash()

  const { ref } = useIntersectionObserver({
    onChange: (isIntersecting) => {
      isIntersecting ? updateHash(slug) : clearHashIfPresent(slug)
    },
  })

  return (
    <h2 ref={ref} className="text-2xl font-bold" id={slug}>
      {children}
    </h2>
  )
}
