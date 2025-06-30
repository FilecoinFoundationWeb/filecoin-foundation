import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { footerNavigationItems, legalLinks } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <footer className="flex flex-col gap-15 bg-zinc-950 px-6 pt-20 pb-15 text-white md:px-15">
      <div className="grid grid-cols-3 gap-15 md:grid-cols-5 md:gap-6">
        <span className="col-span-1">Filecoin Logo</span>
        <div className="col-span-2 md:col-span-1 md:col-start-5">
          <NewsletterForm />
        </div>

        <div className="col-span-3 md:col-span-3 md:col-start-2 md:row-start-1">
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
          >
            {Object.entries(footerNavigationItems).map(([title, items]) => (
              <div key={title}>
                <span className="mb-4 block text-sm font-medium">{title}</span>
                <ul className="flex w-max flex-col gap-3">
                  {items.map(({ href, label }) => {
                    const external = isExternalLink(href, BASE_DOMAIN)
                    return (
                      <li key={href} className="text-sm text-zinc-400">
                        <a
                          href={href}
                          {...(external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <span className="text-left text-xs text-zinc-400">
          Managed by Filecoin Foundation
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
