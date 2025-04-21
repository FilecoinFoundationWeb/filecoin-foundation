import { ExternalTextLink } from './TextLink/ExternalTextLink'

type CopyrightTextProps = {
  siteName: string
}

export function CopyrightText({ siteName }: CopyrightTextProps) {
  const currentYear = new Date().getFullYear()

  return (
    <p className="text-center text-sm">
      &copy; {currentYear} {siteName}. Content on this site is licensed under a{' '}
      <ExternalTextLink href="https://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International license
      </ExternalTextLink>
    </p>
  )
}
