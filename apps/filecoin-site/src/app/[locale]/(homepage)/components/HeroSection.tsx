import { useTranslations } from 'next-intl'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { Announcement } from './Announcement'

export function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <PageSection backgroundVariant="dark" paddingVariant="none">
      <div className="space-y-15 pt-24 pb-24 md:pt-32">
        {/* todo look into when we need space-y-15 */}
        <Announcement centered href={PATHS.BLOG.path}>
          {t('announcement')}
        </Announcement>
        <PageHeader
          centered
          title={t('headline')}
          description={t('description')}
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
