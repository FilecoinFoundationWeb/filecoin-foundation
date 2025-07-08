import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

import { FooterLogo } from './FooterLogo'
import { LegalSection } from './LegalSection'
import { Navigation } from './Navigation'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <div className="mt-20 mb-16 flex flex-col gap-16 lg:flex-row lg:gap-10">
          <div className="self-start lg:self-auto lg:pr-28 xl:pr-36">
            <FooterLogo />
          </div>
          <div className="order-last shrink grow lg:order-none">
            <Navigation />
          </div>
          <div className="shrink grow md:w-1/2 lg:order-none lg:w-auto">
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <hr className="border-zinc-400/10" />

      <Container>
        <LegalSection />
      </Container>
    </Section>
  )
}
