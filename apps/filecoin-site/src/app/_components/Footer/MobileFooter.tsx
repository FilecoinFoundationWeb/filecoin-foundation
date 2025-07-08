import { Container } from '@/components/Container'
import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function MobileFooter() {
  return (
    <div className="block md:hidden">
      <div className="py-10">
        <Container>
          <div className="mb-12 flex flex-col gap-12">
            <div className="self-start">
              <Logo />
            </div>
            <NewsletterForm />
            <Navigation />
          </div>
        </Container>
        <LegalSection />
      </div>
    </div>
  )
}
