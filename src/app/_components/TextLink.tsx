import {
  BookOpen,
  GitFork,
  TwitterLogo,
  Globe,
  ArrowUpRight,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'

import { Icon } from './Icon'

type TextLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
  iconType?: 'caseStudy' | 'repo' | 'twitter' | 'website'
  isExternalPage?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const linkBaseStyles = `flex gap-2 text-brand-300 hover:underline focus:outline-2 focus:outline-brand-100`

export function TextLink({
  href,
  className,
  children,
  iconType,
  isExternalPage,
  ...rest
}: TextLinkProps) {
  className = clsx(linkBaseStyles, className)

  const icons = {
    caseStudy: BookOpen,
    repo: GitFork,
    twitter: TwitterLogo,
    website: Globe,
  }

  return (
    <CustomLink href={href} className={className} {...rest}>
      {iconType && <Icon component={icons[iconType]} />}
      {children}
      {isExternalPage && <Icon component={ArrowUpRight} />}
    </CustomLink>
  )
}
