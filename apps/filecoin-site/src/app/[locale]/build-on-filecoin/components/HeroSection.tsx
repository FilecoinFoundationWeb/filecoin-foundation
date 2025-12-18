import Image from 'next/image'

import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { FILECOIN_DOCS_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { SplitSectionContent } from '@/components/SplitSectionContent'

export function HeroSection() {
  return (
    <PageSection backgroundVariant="dark">
      <header className="grid max-w-full grid-cols-1 lg:grid-cols-3 lg:gap-0">
        <div className="lg:col-span-2 lg:pr-28">
          <PageHeader
            title="Build on Filecoin: open, scalable, verifiable storage"
            description="Filecoin is a programmable, permissionless network from the ground up with cryptographic verification and global redundancy. Integrate decentralized storage that scales with your needs and safeguards data integrity at every layer."
            cta={
              <Button href={FILECOIN_DOCS_URL} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </div>

        <Image
          priority
          src={graphicsData.cupolaEarthView.data}
          alt={graphicsData.cupolaEarthView.alt}
          className="relative mx-auto w-3/4 lg:top-25 lg:left-15 lg:w-full lg:scale-[2]"
        />
      </header>

      <div className="lg:mt-80">
        <SectionContent title="Announcing Filecoin Onchain Cloud">
          <SplitSectionContent
            title="Verifiable onchain services with transparent storage, retrieval, and payments"
            description={[
              'Filecoin Onchain Cloud allows developers to build composable and verifiable services onchain where storage, pining, retrieval, and payments are transparent, programmable, and interoperable by default.',
              'This provides direct, trustless entry points to the Filecoin network so developers can connect data, services, and applications without running their own infrastructure.',
            ]}
            cta={[
              <Button href="https://filecoin.cloud/" variant="primary">
                Get started with Filecoin Onchain Cloud
              </Button>,
            ]}
          />
        </SectionContent>
      </div>
    </PageSection>
  )
}
