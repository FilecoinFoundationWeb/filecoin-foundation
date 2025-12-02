import { clsx } from 'clsx'

import {
  SmartTextLink,
  type SmartTextLinkProps,
} from '../TextLink/SmartTextLink'

type MarkdownLinkProps = SmartTextLinkProps

export function MarkdownLink({
  href,
  children,
  className,
  ...props
}: MarkdownLinkProps) {
  if (!href) {
    const errorMessage = `Invalid markdown: link is missing href attribute for text "${children}"`

    console.error(errorMessage)

    // Optional Sentry integration - only if user has it installed
    if (typeof window !== 'undefined' && 'Sentry' in window) {
      const Sentry = (
        window as { Sentry?: { captureException: (error: Error) => void } }
      ).Sentry
      Sentry?.captureException(new Error(errorMessage))
    }

    return <>{children}</>
  }

  return (
    <SmartTextLink
      href={href}
      className={clsx('not-prose', className)}
      {...props}
    >
      {children}
    </SmartTextLink>
  )
}
