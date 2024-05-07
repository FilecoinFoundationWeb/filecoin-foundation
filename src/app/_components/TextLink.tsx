import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'

type TextLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const linkBaseStyles = `text-brand-300 hover:underline focus:outline-2 focus:outline-brand-100`

export function TextLink({
  href,
  className,
  children,
  ...rest
}: TextLinkProps) {
  className = clsx(linkBaseStyles, className)

  return (
    <CustomLink href={href} className={className} {...rest}>
      {children}
    </CustomLink>
  )
}
