import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionDivider } from '@/components/SectionDivider'

import { FooterLogo } from './FooterLogo'
import { LegalSection } from './LegalSection'
import { Navigation } from './Navigation'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <div className="flex flex-col gap-16 pt-20 pb-16 lg:flex-row lg:gap-10">
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

      <SectionDivider />

      <Container>
        <LegalSection />
      </Container>
    </Section>
  )
}
