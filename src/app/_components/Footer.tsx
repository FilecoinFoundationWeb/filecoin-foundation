'use client'

import { TextLink } from '@/components/TextLink'

export function Footer() {
  return (
    <footer className="py-8 px-12">
      <hr />
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold">Contact Us</p>
          <p>
            For media and collaboration inquiries,{' '}
            <TextLink href="mailto:hello@fil.org">drop us a line.</TextLink>
          </p>
          <p>
            For more information on our ecosystem grants,{' '}
            <TextLink href="mailto:devgrants@fil.org">email us</TextLink>.
          </p>
        </div>
        <ul></ul>
      </div>
      <div className="mt-4">
        <TextLink href="/policy">Privacy Policy</TextLink>
        <TextLink href="/terms">Terms of Use</TextLink>
        <span className="block mt-2">
          Content on this site is licensed under a{' '}
          <TextLink href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International license.
          </TextLink>
        </span>
      </div>
    </footer>
  )
}
