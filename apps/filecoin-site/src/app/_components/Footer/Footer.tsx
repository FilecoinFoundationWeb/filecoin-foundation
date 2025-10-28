import { Link } from '@/i18n/navigation'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { Social } from '@filecoin-foundation/ui/Social'
import { Section } from '@filecoin-foundation/ui-filecoin/Section'

import { socialLinksWithIcons } from '@/constants/socialConfig'

import Logo from '@/assets/logos/filecoin-logo-full.svg'

import { Container } from '@/components/Container'
import { SectionDivider } from '@/components/SectionDivider'


import { LegalSection } from './LegalSection'
import { NavigationItems } from './NavigationItems'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <div className="flex flex-col gap-20 pt-20 pb-15 xl:flex-row xl:justify-between xl:gap-40">
          <div className="flex gap-10 xl:flex-1">
            <div className="flex max-w-md flex-1 flex-col gap-15">
              <LogoLink
                logo={Logo}
                height={32}
                color="text-[var(--color-text-base)]"
                LinkComponent={Link}
              />
              <NewsletterForm />
              <Social linksWithIcons={socialLinksWithIcons} />
            </div>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
          >
            <NavigationItems />
          </nav>
        </div>
      </Container>

      <SectionDivider />

      <Container>
        <LegalSection />
      </Container>
    </Section>
  )
}
