import { PATHS } from '@/constants/paths'

import { LogoLink } from '@/components/Logo/LogoLink'

import { DesktopLink } from './DesktopLink'

const { ABOUT, PROJECTS, LEARNING_RESOURCES, BLOG, DIGEST, FAQS } = PATHS

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <LogoLink />

      <div className="-mr-4 flex gap-3">
        <DesktopLink href={ABOUT.path} label={ABOUT.label} />
        <DesktopLink href={PROJECTS.path} label={PROJECTS.label} />
        <DesktopLink
          href={LEARNING_RESOURCES.path}
          label={LEARNING_RESOURCES.label}
        />
        <DesktopLink href={BLOG.path} label={BLOG.label} />
        <DesktopLink href={DIGEST.path} label={DIGEST.label} />
        <DesktopLink href={FAQS.path} label={FAQS.label} />
      </div>
    </nav>
  )
}
