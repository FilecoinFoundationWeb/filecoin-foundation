import { CopyrightText } from '@filecoin-foundation/ui/CopyrightText'
import { Social } from '@filecoin-foundation/ui/Social'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { footerNavigationItems } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { Logo } from '@/components/Logo'
import { NewsletterForm } from '@/components/NewsletterForm'

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6">
      <hr />
      <div className="my-6 grid grid-cols-1 gap-y-6 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <Logo />
        </div>
        <div className="sm:col-span-3">
          <p className="max-w-readable mb-6">
            For the latest big ideas and news from the Filecoin ecosystem and
            decentralized web, subscribe to Filecoin Foundation's newsletter,
            The Upload.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <hr />
      <div className="sm:px-8">
        <Social linksWithIcons={socialLinksWithIcons} spreadIconLinks={true} />
      </div>

      <hr />
      <nav
        aria-label="Footer navigation"
        className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
      >
        {Object.entries(footerNavigationItems).map(([title, items]) => (
          <div key={title}>
            <span className="mb-4 block font-bold">{title}</span>
            <ul className="flex w-max flex-col gap-3">
              {items.map(({ href, label }) => (
                <li key={href}>
                  <SmartTextLink href={href} baseDomain={BASE_DOMAIN}>
                    {label}
                  </SmartTextLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <hr />
      <div className="text-center text-sm">
        <CopyrightText siteName="Filecoin Foundation" />
      </div>
    </footer>
  )
}
