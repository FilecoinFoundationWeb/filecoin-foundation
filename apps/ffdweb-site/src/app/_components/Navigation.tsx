import { InternalTextLink } from '@filecoin-foundation/ui/TextLink'

import { PATHS } from '@/constants/paths'

import { LogoLink } from '@/components/Logo/LogoLink'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <LogoLink />

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
