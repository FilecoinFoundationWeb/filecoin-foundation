import { useTranslations } from 'next-intl'

import { Announcement } from '@filecoin-foundation/ui-filecoin/Announcement'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

export function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <PageSection backgroundVariant="dark" paddingVariant="none">
      <div className="space-y-15 pt-24 pb-24 md:pt-32">
        {/* todo look into when we need space-y-15 */}
        <Announcement centered href="/blog">
          {t('announcement')}
        </Announcement>

        <PageHeader
          centered
          title={t('headline')}
          description={t('description')}
          cta={[
            <Button href="/store-data" variant="primary">
              {t('cta.main')}
            </Button>,
            <Button href="/build-on-filecoin" variant="ghost">
              {t('cta.secondary')}
            </Button>,
          ]}
        />
      </div>
    </PageSection>
  )
}
