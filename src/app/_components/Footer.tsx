'use client'

import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

export function Footer() {
  return (
    <footer className="py-8 px-12">
      <hr />
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold">Contact Us</p>
          <p>
            For media and collaboration inquiries,{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.email}>
              drop us a line.
            </TextLink>
          </p>
          <p>
            For more information on our ecosystem grants,{' '}
            <TextLink href={FILECOIN_URLS.grants.email}>email us</TextLink>.
          </p>
        </div>
        <ul></ul>
      </div>
      <div className="mt-4">
        <TextLink href={PATHS.POLICY.path}>{PATHS.POLICY.label}</TextLink>
        <TextLink href={PATHS.TERMS.path}>{PATHS.TERMS.label}</TextLink>
        <span className="block mt-2">
          Content on this site is licensed under a{' '}
          <TextLink href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International license.
          </TextLink>
        </span>
        <Social />
      </div>
    </footer>
  )
}
