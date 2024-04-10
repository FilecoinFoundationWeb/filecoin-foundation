'use client'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { PATHS, PathValues } from '@/constants/paths'
import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

type NavigationListItem = {
  label: string
  path: PathValues
}

type NavigationList = {
  title: string
  items: NavigationListItem[]
}

const navigationItems = [
  PATHS.ABOUT,
  PATHS.GET_INVOLVED,
  PATHS.ECOSYSTEM,
  PATHS.BLOG,
]

const legalItems = [PATHS.PRIVACY_POLICY, PATHS.TERMS]

function NavigationList({ title, items }: NavigationList) {
  return (
    <div>
      <span className="mb-6 block font-bold">{title}</span>
      <ul className="flex flex-col gap-3">
        {items.map(({ label, path }) => (
          <li key={path}>
            <TextLink href={path}>{label}</TextLink>
          </li>
        ))}
      </ul>
    </div>
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
            the decentralized web, subscribe to our newsletter.
          </p>
          <Button
            className="w-full sm:self-start md:w-auto"
            variant="primary"
            href={FILECOIN_FOUNDATION_URLS.newsletter}
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>

      <hr />
      <Social />
      <hr />

      <div className="flex flex-wrap gap-8 sm:gap-10">
        <NavigationList title="Browse" items={navigationItems} />
        <NavigationList title="Legal" items={legalItems} />

        <div className="flex flex-col gap-4">
          <span className="font-bold">Contact Us</span>
          <p>
            For media and collaboration inquiries,{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.email}>
              Drop us a line
            </TextLink>
          </p>
          <p>
            For more information on our ecosystem grants,{' '}
            <TextLink href={FILECOIN_URLS.grants.email}>Email us</TextLink>
          </p>
        </div>
      </div>

      <hr />
      <p className="text-center">
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
