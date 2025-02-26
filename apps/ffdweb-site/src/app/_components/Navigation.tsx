import Link from 'next/link'

import { InternalTextLink } from '@filecoin-foundation/ui/TextLink'

import { PATHS } from '@/constants/paths'

import { Logo } from '@/components/Logo'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <Link
        className="focus:brand-outline shrink-0"
        href={PATHS.HOME.path}
        aria-label="Go to homepage"
      >
        <Logo />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex gap-4">
        <InternalTextLink href={PATHS.HOME.path}>
          {PATHS.HOME.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.ABOUT.path}>
          {PATHS.ABOUT.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.PROJECTS.path}>
          {PATHS.PROJECTS.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.LEARNING_RESOURCES.path}>
          {PATHS.LEARNING_RESOURCES.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.BLOG.path}>
          {PATHS.BLOG.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.DIGEST.path}>
          {PATHS.DIGEST.label}
        </InternalTextLink>
        <InternalTextLink href={PATHS.FAQS.path}>
          {PATHS.FAQS.label}
        </InternalTextLink>
      </div>
    </nav>
  )
}
