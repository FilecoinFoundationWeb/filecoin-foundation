import Link from 'next/link'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { Social } from '@filecoin-foundation/ui/Social'
import clsx from 'clsx'

import { footerLegalItems, footerNavigationItems } from '@/constants/navigation'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { LogoLink } from './Logo/LogoLink'

import FooterDecorationLeft from '@/assets/graphics/footer-decoration-left.svg'
import FooterDecorationRight from '@/assets/graphics/footer-decoration-right.svg'

type FooterSectionProps = {
  title: string
  children: React.ReactNode
}

type FooterLinkProps = {
  href: string
  label: string
}

const FOOTER_GAP = 'gap-16'
const FOOTER_SECTION_GAP = 'gap-10'

export function Footer() {
  return (
    <footer className={clsx('mt-32 grid grid-cols-1', FOOTER_GAP)}>
      <FooterGraphics />
      <div
        className={clsx(
          'grid grid-cols-1 lg:auto-cols-max lg:grid-flow-col',
          FOOTER_GAP,
        )}
      >
        <LogoLink />

        <nav
          aria-label="Footer navigation"
          className={clsx(
            'grid grid-cols-1 sm:auto-cols-fr sm:grid-flow-col',
            FOOTER_GAP,
          )}
        >
          {footerNavigationItems.map((section) => (
            <FooterSection key={section.title} title={section.title}>
              <ul className="grid gap-3">
                {section.links.map(({ href, label }) => (
                  <FooterLink key={href} href={href} label={label} />
                ))}
              </ul>
            </FooterSection>
          ))}

          <FooterSection title="Follow Us">
            <div className="flex">
              <Social linksWithIcons={socialLinksWithIcons} />
            </div>
          </FooterSection>
        </nav>
      </div>

      <div className="grid gap-8">
        <hr />
        <div className="grid grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-1 lg:items-baseline">
          <ul
            className={clsx(
              'grid auto-cols-max grid-flow-col',
              FOOTER_SECTION_GAP,
            )}
          >
            {footerLegalItems.map(({ label, href }) => (
              <li key={href} className="fit-content">
                <Link
                  className="focus:brand-outline text-neutral-50 hover:underline"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm lg:text-end">
            &copy; {new Date().getFullYear()} Filecoin Foundation for
            Decentralized Web{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className={clsx('grid content-start', FOOTER_SECTION_GAP)}>
      <Heading tag="h3" variant="md-bold">
        {title}
      </Heading>
      {children}
    </div>
  )
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link
        className="focus:brand-outline text-neutral-50 hover:underline" /* CHECK */
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}

function FooterGraphics() {
  return (
    <div className="flex h-20 items-center justify-between sm:h-36">
      <FooterDecorationLeft
        className="h-full w-auto"
        aria-hidden="true"
        role="presentation"
      />
      <FooterDecorationRight
        className="h-full w-auto"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  )
}
