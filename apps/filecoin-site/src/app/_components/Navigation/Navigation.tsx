import { getTranslations } from 'next-intl/server'

import { Container } from '@filecoin-foundation/ui-filecoin/Container'
import { MobileNavigation } from '@filecoin-foundation/ui-filecoin/Navigation/MobileNavigation'
import {
  Section,
  type SectionProps,
} from '@filecoin-foundation/ui-filecoin/Section/Section'

import { getMobileNavigationItems } from './constants/navigation'
import { DesktopNavigation } from './DesktopNavigation'
import { HomeLogoIconLink } from './HomeLogoIconLink'
import { NavigationLanguageToggle } from './NavigationLanguageToggle'

type NavigationProps = {
  backgroundVariant: SectionProps['backgroundVariant']
}

export async function Navigation({ backgroundVariant }: NavigationProps) {
  const t = await getTranslations('navigation')

  return (
    <Section as="header" backgroundVariant={backgroundVariant}>
      <Container>
        <nav className="flex items-center justify-between py-8 lg:gap-24 xl:justify-start">
          <HomeLogoIconLink />

          <div className="block xl:hidden">
            <MobileNavigation
              items={getMobileNavigationItems(t)}
              HomeLogoIconLinkComponent={HomeLogoIconLink}
              Footer={<NavigationLanguageToggle variant="relaxed" />}
            />
          </div>

          <div className="hidden xl:block xl:flex-1">
            <DesktopNavigation />
          </div>
        </nav>
      </Container>
    </Section>
  )
}
