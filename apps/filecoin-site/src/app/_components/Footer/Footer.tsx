import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionDivider } from '@/components/SectionDivider'

import { LegalSection } from './LegalSection'
import { Navigation } from './Navigation'
import { NewsletterForm } from './NewsletterForm'

import Logo from '@/assets/logos/filecoin-logo-full.svg'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <div className="flex flex-col gap-16 pt-20 pb-16 lg:flex-row lg:gap-10">
          <div className="self-start lg:self-auto lg:pr-28 xl:pr-36">
            <LogoLink logo={Logo} height={32} color="text-zinc-50" />
          </div>
          <div className="order-last shrink grow lg:order-none">
            <Navigation />
          </div>
          <div className="shrink grow md:w-1/2 lg:order-none lg:w-auto">
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <SectionDivider />

      <Container>
        <LegalSection />
      </Container>
    </Section>
  )
}
