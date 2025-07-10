import { BookIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { IconBadge } from '@/components/IconBadge'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { communityLinks } from './data/communityLinks'
import { networkActions } from './data/networkActions'
import { networkPrinciples } from './data/networkPrinciples'
import { providerBenefits } from './data/providerBenefits'

export default function Home() {
  return (
    <>
      <PageSection backgroundVariant="transparent">
        <PageHeader
          description="Keep your data accessible, verifiable, and free from centralized control with the world's largest decentralized storage network."
          title="Preserving humanity's most important information"
        />
        <CardGrid as="ul" cols="lgThree">
          {networkActions.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="light"
              topBorder={true}
              title={title}
              description={description}
              icon={{
                component: icon,
                position: 'side',
                size: 'sm',
              }}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Build apps better with resilient storage
        </Heading>
        <DescriptionText>Open. Scalable. Built for the future.</DescriptionText>
        <DescriptionText
          children={[
            'Filecoin gives developers a decentralized, verifiable storage layer that scales — perfect for AI pipelines, dApps, data-heavy SaaS platforms, and more. Accelerate development with open source tools, native IPFS integration, instant retrieval, and a permissionless storage marketplace.',
            'Filecoin democratizes data infrastructure, so you can build without compromise — knowing your data belongs to you and your users, not centralized gatekeepers.',
          ]}
        />
        <Button href={PATHS.BUILD_ON_FILECOIN.path} variant="primaryDark">
          Explore builder's hub
        </Button>
        <a
          href={PATHS.LEARN.path}
          className="inline-flex items-center gap-2 text-zinc-300"
        >
          <GithubLogoIcon size={24} />
          GitHub
        </a>
        <a
          href={PATHS.BLOG.path}
          className="inline-flex items-center gap-2 text-zinc-300"
        >
          <BookIcon size={24} />
          Documentation
        </a>
      </PageSection>

      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          Store your data with confidence
        </Heading>
        <p>
          Join leading organizations leveraging Filecoin for a more resilient
          digital future
        </p>
        <p>Secure, verifiable, long-term storage that you control.</p>
        <DescriptionText>
          No matter what you’re storing — your data remains tamper-proof and
          verifiable. Filecoin offers cost-effective storage backed by a global
          network of independent data centers with automatic replication and
          lower egress fees.
        </DescriptionText>
        <Button href={PATHS.STORE_DATA.path}>Find storage solutions</Button>
        <Button href="#" variant="ghost">
          Why store on Filecoin
        </Button>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Power a more open, resilient web
        </Heading>
        <DescriptionText>
          Join a global network of independent data centers powering the
          Filecoin ecosystem.
        </DescriptionText>
        <CardGrid as="ul" cols="lgThree">
          {providerBenefits.map(({ title, description }) => (
            <Card
              key={title}
              backgroundVariant="dark"
              as="li"
              title={title}
              description={description}
            />
          ))}
        </CardGrid>
        <Button href={PATHS.OFFER_STORAGE.path} variant="primaryDark">
          Become a storage provider
        </Button>
        <Button href={PATHS.LEARN.path} variant="ghostDark">
          Explore documentation
        </Button>
      </PageSection>

      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          Mission-driven, built to scale, verifiable by design
        </Heading>
        <DescriptionText>
          Filecoin offers a fundamentally different approach to data storage and
          creates a foundation for a more open, resilient, and user-controlled
          web.
        </DescriptionText>
        <CardGrid as="ul" cols="smTwo">
          {networkPrinciples.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="light"
              title={title}
              description={description}
              icon={{
                component: icon,
                position: 'top',
              }}
            />
          ))}
        </CardGrid>
        <Button href={PATHS.LEARN.path}>
          Learn more about the Filecoin network
        </Button>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <Heading tag="h2" variant="6xl-medium">
          Latest news
        </Heading>
        <DescriptionText>
          Insights, updates, ecosystem spotlights, and community stories,
          directly from the teams building Filecoin.
        </DescriptionText>
        <Button href={PATHS.BLOG.path}>View all articles</Button>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Join the community
        </Heading>
        <DescriptionText>
          Be part of the movement to build a decentralized, efficient, and
          robust foundation for humanity's information.
        </DescriptionText>
        <CardGrid as="ul" cols="smTwo">
          {communityLinks.map(({ icon, href, label }) => (
            <li key={label} className="flex flex-col">
              <div className="flex items-center gap-5 border-t border-white/10 pt-6">
                <IconBadge icon={icon} size="sm" />
                <a href={href}>{label}</a>
              </div>
            </li>
          ))}
        </CardGrid>
      </PageSection>
    </>
  )
}
