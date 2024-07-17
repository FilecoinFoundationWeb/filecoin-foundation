'use client'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { footerNavigationList } from '@/utils/navigationItems'

import { PathValues } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

type NavigationListItemProps = {
  label: string
  path: PathValues | typeof FILECOIN_FOUNDATION_URLS.email.href
}

type NavigationListProps = {
  items: NavigationListItemProps[]
}

function NavigationList({ items }: NavigationListProps) {
  return (
    <ul className="flex w-max flex-col gap-3">
      {items.map(({ label, path }) => (
        <li key={path}>
          <TextLink href={path}>{label}</TextLink>
        </li>
      ))}
    </ul>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6">
      <hr />
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between md:justify-start md:gap-36">
        <Logo />
        <div className="sm:max-w-96">
          <p className="mb-6">
            For the latest big ideas and news from the Filecoin ecosystem and
            decentralized web, subscribe to Filecoin Foundation’s newsletter,
            The Upload.
          </p>
          <Button
            className="w-full sm:self-start md:w-auto"
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
      <div className="flex flex-wrap gap-x-20 gap-y-6">
        <div className="flex flex-1 flex-wrap gap-x-12 gap-y-8">
          {Object.entries(footerNavigationList).map(([title, items]) => (
            <div key={title} className="flex flex-1 flex-col gap-4">
              <span className="block w-max font-bold">{title}</span>
              <NavigationList
                items={items.map((item) => ({
                  label: item.label,
                  path: item.path,
                }))}
              />
            </div>
          ))}
        </div>
      </div>

      <hr />
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Content on this site is licensed under
        a{' '}
        <TextLink href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International license
        </TextLink>
        .
      </p>
    </footer>
  )
}
