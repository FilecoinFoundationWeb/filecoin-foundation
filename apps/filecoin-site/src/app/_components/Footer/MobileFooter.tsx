import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-12 py-10 md:hidden">
      <div className="flex flex-col gap-12">
        <div className="self-start">
          <Logo />
        </div>
        <NewsletterForm />
        <Navigation />
      </div>
      <LegalSection />
    </div>
  )
}
