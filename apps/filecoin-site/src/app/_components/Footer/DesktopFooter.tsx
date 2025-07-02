import clsx from 'clsx'

import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { CONTAINER_SPACING } from './Footer'
import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function DesktopFooter() {
  return (
    <div className="hidden md:flex md:flex-col md:gap-16 md:py-20">
      <div className={clsx('flex justify-between gap-8', CONTAINER_SPACING)}>
        <div className="flex-shrink-0">
          <Logo height={30} />
        </div>
        <Navigation />
        <NewsletterForm />
      </div>
      <LegalSection />
    </div>
  )
}
