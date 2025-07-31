import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionDivider } from '@/components/SectionDivider'

import { LegalSection } from './LegalSection'
import { NavigationItems } from './NavigationItems'
import { NewsletterForm } from './NewsletterForm'

import Logo from '@/assets/logos/filecoin-logo-full.svg'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <div className="flex flex-col gap-15 pt-20 pb-15 lg:gap-10 xl:flex-row xl:gap-40">
          <div className="self-start xl:self-auto">
            <LogoLink logo={Logo} height={32} color="text-zinc-50" />
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            <NavigationItems />
            <div className="col-span-full sm:col-start-2 lg:col-span-8 lg:col-start-4">
              <NewsletterForm />
            </div>
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
