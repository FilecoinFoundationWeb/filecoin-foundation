import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { footerNavigationItems, legalLinks } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { LogoFull } from '@/components/LogoFull'

import { LogoFilecoinFoundation } from '@/_components/Footer/LogoFilecoinFoundation'

export function Footer() {
  return (
    <footer className="flex flex-col gap-15 bg-zinc-950 px-6 pt-20 pb-15 text-white md:px-15">
      {/* Desktop view */}
      <div className="hidden md:flex md:justify-between md:gap-6">
        <LogoFull height={30} />
        <FooterNavigation />
        <NewsletterForm />
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-15 md:hidden">
        <div className="items-left flex">
          <LogoFull />
        </div>
        <NewsletterForm />
        <FooterNavigation />
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-15 sm:flex-row">
        <span className="font-regular flex items-center gap-3 text-xs text-zinc-400">
          Managed by <LogoFilecoinFoundation />
        </span>
        <ul className="order-1 flex items-center space-x-10 text-sm text-zinc-400 md:space-x-15">
          {legalLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

function FooterNavigation() {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid grid-cols-2 gap-10 gap-y-10 sm:grid-cols-3"
    >
      {Object.entries(footerNavigationItems).map(([title, items]) => (
        <div key={title}>
          <span className="mb-4 block text-sm font-medium">{title}</span>
          <ul className="flex w-max flex-col gap-3">
            {items.map(({ href, label }) => (
              <li key={href} className="text-sm text-zinc-400">
                <SmartTextLink href={href} baseDomain={BASE_DOMAIN}>
                  {label}
                </SmartTextLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
