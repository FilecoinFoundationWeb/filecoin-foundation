import { Container } from '@/components/Container'
import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function DesktopFooter() {
  return (
    <>
      <div className="hidden md:block md:pt-20 md:pb-16">
        <Container>
          <div className="mb-16 flex justify-between gap-8">
            <div className="flex-shrink-0">
              <Logo height={30} />
            </div>
            <Navigation />
            <NewsletterForm />
          </div>
        </Container>
        <LegalSection />
      </div>
    </>
  )
}
