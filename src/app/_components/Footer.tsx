'use client'

import CustomLink from '@/components/CustomLink'

export default function Footer() {
  return (
    <footer className="py-8 px-12">
      <hr />
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold">Contact Us</p>
          <p>
            For media and collaboration inquiries,{' '}
            <CustomLink href="mailto:hello@fil.org">drop us a line.</CustomLink>
          </p>
          <p>
            For more information on our ecosystem grants,{' '}
            <CustomLink href="mailto:devgrants@fil.org">email us</CustomLink>.
          </p>
        </div>
        <ul></ul>
      </div>
      <div className="mt-4">
        <CustomLink href="/policy">Privacy Policy</CustomLink>
        <CustomLink href="/terms">Terms of Use</CustomLink>
        <span className="block mt-2">
          Content on this site is licensed under a{' '}
          <CustomLink href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International license.
          </CustomLink>
        </span>
      </div>
    </footer>
  )
}
