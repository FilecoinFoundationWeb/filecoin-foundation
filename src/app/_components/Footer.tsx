import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { footerNavigationList } from '@/utils/navigationItems'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6">
      <hr />
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <Logo />
        </div>
        <div className="sm:col-span-3">
          <p className="mb-6 max-w-readable">
            For the latest big ideas and news from the Filecoin ecosystem and
            decentralized web, subscribe to Filecoin Foundation’s newsletter,
            The Upload.
          </p>
          <Button
            className="w-full sm:w-auto"
            variant="ghost"
            href={FILECOIN_FOUNDATION_URLS.newsletter}
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>

      <hr />
      <div className="sm:px-8">
        <Social />
      </div>

      <hr />
      <nav
        aria-label="Footer navigation"
        className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
      >
        {Object.entries(footerNavigationList).map(([title, items]) => (
          <div key={title}>
            <span className="mb-4 block font-bold">{title}</span>
            <ul className="flex w-max flex-col gap-3">
              {items.map((item) => (
                <li key={item.path}>
                  <TextLink href={item.path}>{item.label}</TextLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <hr />
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Content on this site is licensed under
        a{' '}
        <TextLink href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International license
        </TextLink>
      </p>
    </footer>
  )
}
