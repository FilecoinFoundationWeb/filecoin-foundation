import clsx from 'clsx'

import { NewsletterForm } from '@/components/Footer/NewsletterForm'
import { Logo } from '@/components/Logo/Logo'

import { CONTAINER_SPACING } from './Footer'
import { LegalSection } from './LegalSection/LegalSection'
import { Navigation } from './Navigation'

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-12 py-10 md:hidden">
      <div className={clsx('flex flex-col gap-12', CONTAINER_SPACING)}>
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
