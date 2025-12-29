import { useTranslations } from 'next-intl'

import { Announcement } from '@filecoin-foundation/ui-filecoin/Announcement'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'
import { FILECOIN_CLOUD_URL } from '@/constants/siteMetadata'

export function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <PageSection backgroundVariant="transparentDark" paddingVariant="none">
      <div className="space-y-15 py-25 md:py-30">
        <Announcement centered href={FILECOIN_CLOUD_URL}>
          {t('announcement')}
        </Announcement>

        <PageHeader
          centered
          title={t('headline')}
          description={t('description')}
          variant="highContrast"
          cta={[
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              {t('cta.main')}
            </Button>,
            <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="ghost">
              {t('cta.secondary')}
            </Button>,
          ]}
        />
      </div>
    </PageSection>
  )
}
