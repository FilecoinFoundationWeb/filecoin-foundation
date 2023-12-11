import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function CustomLink({
  href,
  children,
  className = '',
  ...props
}: Props) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#')
  const combinedStyles = `underline ${className}`.trim()

  return isInternalLink ? (
    <Link href={href} className={combinedStyles} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} className={combinedStyles} {...props}>
      {children}
    </a>
  )
}
