import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { LogoFull } from '@/components/LogoFull'

import { FooterLegal } from './FooterLegal/FooterLegal'
import { FooterNavigation } from './FooterNavigation'

export function FooterMobile() {
  return (
    <div className="flex flex-col gap-16 md:hidden">
      <div className="flex">
        <LogoFull />
      </div>
      <NewsletterForm />
      <FooterNavigation />
      <FooterLegal />
    </div>
  )
}
