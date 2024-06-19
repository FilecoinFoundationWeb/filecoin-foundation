import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'

type TextLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const linkBaseStyles =
  'focus:brand-outline text-brand-300 hover:underline'

export function TextLink({
  href,
  className,
  children,
  ...rest
}: TextLinkProps) {
  return (
    <CustomLink
      href={href}
      className={clsx(linkBaseStyles, className)}
      {...rest}
    >
      {children}
    </CustomLink>
  )
}
