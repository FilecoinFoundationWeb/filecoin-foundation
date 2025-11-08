import type { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import { SmartTextLink } from '../TextLink/SmartTextLink'

type MarkdownLinkProps = ComponentPropsWithoutRef<'a'> & {
  baseDomain: string
}

export function MarkdownLink({
  href,
  children,
  baseDomain,
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
      baseDomain={baseDomain}
      className={clsx('not-prose', className)}
      {...props}
    >
      {children}
    </SmartTextLink>
  )
}
