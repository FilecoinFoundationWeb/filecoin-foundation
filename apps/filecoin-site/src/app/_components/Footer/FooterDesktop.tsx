import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { LogoFull } from '@/components/LogoFull'

import { FooterLegal } from './FooterLegal/FooterLegal'
import { FooterNavigation } from './FooterNavigation'

export function FooterDesktop() {
  return (
    <div className="hidden md:flex md:flex-col md:gap-16">
      <div className="flex justify-between gap-8">
        <div className="flex-shrink-0">
          <LogoFull height={30} />
        </div>
        <FooterNavigation />
        <NewsletterForm />
      </div>
      <FooterLegal />
    </div>
  )
}
