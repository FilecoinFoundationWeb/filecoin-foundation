import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-16 md:hidden">
      <div className="flex">
        <Logo />
      </div>
      <NewsletterForm />
      <Navigation />
      <LegalSection />
    </div>
  )
}
