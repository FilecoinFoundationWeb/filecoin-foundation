import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { legalLinks } from '@/constants/navigation'

import FilecoinFoundationLogo from '@/assets/logos/filecoin-foundation-logo.svg'

export function LegalSection() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 py-16 sm:flex-row md:gap-16">
      <a
        href="https://fil.org/"
        className="focus:brand-outline text-zinc-400 flex items-center gap-2 text-xs hover:text-white"
        aria-label="Managed by Filecoin Foundation &ndash; Visit website"
      >
        <span>Managed by</span>
        <FilecoinFoundationLogo
          height={24}
          aria-hidden="true"
          focusable="false"
        />
      </a>

      <ul className="order-1 flex items-center gap-10 text-sm text-zinc-400 md:gap-16">
        {legalLinks.map(({ href, label }) => (
          <li key={href}>
            <InternalTextLink href={href}>{label}</InternalTextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
