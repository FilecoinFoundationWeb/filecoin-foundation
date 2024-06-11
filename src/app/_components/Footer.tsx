'use client'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { PATHS, PathValues } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

type SectionProps = {
  title: string
  children: React.ReactNode
}

type NavigationListItemProps = {
  label: string
  path: PathValues
}

type NavigationListProps = {
  items: NavigationListItemProps[]
}

const navigationItems = [
  PATHS.ABOUT,
  PATHS.EVENTS,
  PATHS.GRANTS,
  PATHS.ECOSYSTEM_EXPLORER,
  PATHS.GOVERNANCE,
  PATHS.BLOG,
]

const legalItems = [
  PATHS.PRIVACY_POLICY,
  PATHS.EMPLOYEE_PRIVACY_POLICY,
  PATHS.TERMS_OF_USE,
]

function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="block font-bold">{title}</span>
      {children}
    </div>
  )
}

function NavigationList({ items }: NavigationListProps) {
  return (
    <ul className="flex flex-col gap-3">
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
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <Section title="Browse">
            <NavigationList items={navigationItems} />
          </Section>
          <Section title="Legal">
            <NavigationList items={legalItems} />
          </Section>
        </div>
        <Section title="Contact Us">
          <div>
            <p className="mb-3">
              For media and collaboration inquiries,{' '}
              <TextLink href={FILECOIN_FOUNDATION_URLS.email.href}>
                drop us a line.
              </TextLink>
            </p>
            <p>
              For more information on our ecosystem grants,{' '}
              <TextLink href={FILECOIN_FOUNDATION_URLS.grants.email.href}>
                email us.
              </TextLink>
            </p>
          </div>
        </Section>
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
