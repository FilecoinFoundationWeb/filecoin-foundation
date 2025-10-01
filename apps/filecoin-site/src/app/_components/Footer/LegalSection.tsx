import type { Route } from 'next'


import { FILECOIN_FOUNDATION_URL } from '@/constants/siteMetadata'

import FilecoinFoundationLogo from '@/assets/logos/filecoin-foundation-logo.svg'

import { InternalTextLink } from '@/components/TextLink/InternalTextLink'

import { footerLegalItems } from '../Navigation/constants/navigation'

export function LegalSection() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 py-16 sm:flex-row md:gap-16">
      <a
        href={FILECOIN_FOUNDATION_URL}
        className="focus:brand-outline flex items-center gap-2 text-xs text-[var(--color-paragraph-text)] hover:text-white"
        aria-label="Managed by Filecoin Foundation &ndash; Visit website"
      >
        <span>Managed by</span>
        <FilecoinFoundationLogo
          height={24}
          aria-hidden="true"
          focusable="false"
        />
      </a>

      <ul className="order-1 flex items-center gap-10 text-sm text-[var(--color-paragraph-text)] md:gap-16">
        {footerLegalItems.map(({ href, label }) => (
          <li key={href}>
            <InternalTextLink href={href as Route}>{label}</InternalTextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
