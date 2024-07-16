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
  path: PathValues | 'mailto:hello@fil.org'
}

type NavigationListProps = {
  items: NavigationListItemProps[]
}

const companyItems = [
  PATHS.ABOUT,
  PATHS.EVENTS,
  PATHS.GRANTS,
  PATHS.ECOSYSTEM_EXPLORER,
  PATHS.GOVERNANCE,
  PATHS.ORBIT,
  PATHS.SECURITY,
  PATHS.BLOG,
]

const getInvolvedItems = [PATHS.EVENTS, PATHS.GRANTS]

const communityItems = [PATHS.ECOSYSTEM_EXPLORER, PATHS.GOVERNANCE]

const resourcesItems = [PATHS.BLOG]

const legalItems = [
  PATHS.TERMS_OF_USE,
  PATHS.EMPLOYEE_PRIVACY_POLICY,
  PATHS.PRIVACY_POLICY,
]

const navigationList = {
  Company: companyItems,
  'Get Involved': getInvolvedItems,
  Community: communityItems,
  Resources: resourcesItems,
  Legal: legalItems,
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <span className="block w-max font-bold">{title}</span>
      {children}
    </div>
  )
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
          {Object.entries(navigationList).map(([title, items]) => (
            <Section key={title} title={title}>
              <NavigationList
                items={items.map((item) => ({
                  label: item.label,
                  path: item.path,
                }))}
              />
            </Section>
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
