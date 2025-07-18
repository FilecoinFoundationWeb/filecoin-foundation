import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { coreInfrastructureSpecs } from './data/coreInfrastructureSpecs'
import { dataCenterRequirements } from './data/dataCenterRequirements'
import { filecoinEarningsInsights } from './data/filecoinEarningsInsights'
import { specializedInfrastructureSpecs } from './data/specializedInfrastructureSpecs'

export default function OfferStorage() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="Join the world's largest decentralized storage network"
          description="Become a Filecoin storage provider and contribute capacity to a global system preserving humanity's most important data. If you've got the infrastructure, you can become a core part of it."
          cta={
            <Button href="" variant="primary">
              Check requirements
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="What you need to offer storage on Filecoin"
          description="To offer storage on Filecoin you'll need enterprise-grade infrastructure and deep technical expertise to get started."
        >
          <SectionSubContent
            title="Data center environment"
            description="You'll need to run your infrastructure in a secure, reliable, and always-on environment."
          >
            <CardGrid as="ul" variant="smTwoLgThreeWider">
              {dataCenterRequirements.map(({ title, description, icon }) => (
                <Card
                  key={title}
                  as="li"
                  backgroundVariant="dark"
                  title={title}
                  description={description}
                  icon={icon}
                />
              ))}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            title="Core infrastructure setup"
            description="This includes high-throughput networking and two powerful CPU nodes required to operate the system reliably and at scale."
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {coreInfrastructureSpecs.map(({ title, list }) => (
                <li key={title} className="space-y-3">
                  <Heading tag="h4" variant="xl-medium">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-400">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            title="Specialized & storage systems"
            description="The Sealing Node prepares and proves data with GPU acceleration, while the JBOD stores large volumes of client data persistently and reliably."
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {specializedInfrastructureSpecs.map(({ title, list }) => (
                <li key={title} className="space-y-3">
                  <Heading tag="h4" variant="xl-medium">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-400">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            title="Begin your storage provider journey"
            description="If you're already running infrastructure at this level — or planning to — you might be a great fit."
            cta={
              <Button href="" variant="primary">
                Book a call with our onboarding team
              </Button>
            }
          />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="Return on investment">
          <SplitSectionContent
            title="Break even in 18 to 24 months."
            description={[
              'Most Storage Providers recover their hardware investment within 18 to 24 months, depending on uptime, deal-making activity, and operational efficiency.',
              'Once breakeven is reached, earnings can turn into long-term profit — all while contributing to the backbone of decentralized data.',
            ]}
            cta={
              <Button href="" variant="primary" className="w-fit">
                Learn more
              </Button>
            }
          />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Earn more rewards for more storage"
          description="Join the world's largest decentralized storage network — empowering independent operators to store and protect critical data without relying on centralized tech giants. Your infrastructure helps power a more open, resilient, and censorship-resistant internet."
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {filecoinEarningsInsights.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                hasTopBorder
                title={title}
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Build an open, resilient, and trustworthy web"
          description="Storing more files is directly related to winning more block rewards. The more storage you add, the more Filecoin you’ll earn."
          cta={
            <Button href="" variant="primary">
              Book a call with our onboarding team
            </Button>
          }
        />
      </PageSection>
    </>
  )
}
