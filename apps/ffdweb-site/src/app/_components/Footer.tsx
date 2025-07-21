import Link from 'next/link'

import clsx from 'clsx'

import { type BaseLinkProps, BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { CopyrightText } from '@filecoin-foundation/ui/CopyrightText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { Social } from '@filecoin-foundation/ui/Social'

import { footerLegalItems, footerNavigationItems } from '@/constants/navigation'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { Logo } from '@/components/Logo'

import FooterDecorationLeft from '@/assets/graphics/footer-decoration-left.svg'
import FooterDecorationRight from '@/assets/graphics/footer-decoration-right.svg'

type FooterSectionProps = {
  title: string
  children: React.ReactNode
}

type FooterLinkProps = {
  href: BaseLinkProps['href']
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
        <LogoLink logo={Logo} height={64} />

        <nav
          aria-label="Footer navigation"
          className={clsx(
            'grid grid-cols-1 sm:auto-cols-fr sm:grid-flow-col',
            FOOTER_GAP,
          )}
        >
          {footerNavigationItems.map((section) => (
            <FooterSection key={section.title} title={section.title}>
              <ul className="grid gap-5">
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
        <hr className="text-neutral-600" />
        <div className="grid grid-rows-2 gap-5 text-sm text-neutral-200 lg:grid-cols-2 lg:grid-rows-1 lg:items-baseline">
          <ul
            className={clsx(
              'grid auto-cols-max grid-flow-col',
              FOOTER_SECTION_GAP,
            )}
          >
            {footerLegalItems.map(({ label, href }) => (
              <li key={href} className="fit-content">
                <Link
                  className="focus:brand-outline hover:underline"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <CopyrightText siteName="Filecoin Foundation for the Decentralized Web" />
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
      <BaseLink
        className="focus:brand-outline text-neutral-50 hover:underline"
        href={href}
        baseDomain={BASE_DOMAIN}
      >
        {label}
      </BaseLink>
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
