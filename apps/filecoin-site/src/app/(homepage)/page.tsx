import {
  BookIcon,
  BracketsAngleIcon,
  CodeIcon,
  DatabaseIcon,
  GithubLogoIcon,
  GlobeIcon,
  HardDriveIcon,
  PuzzlePieceIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

export default function Home() {
  return (
    <>
      <PageSection backgroundVariant="transparent">
        <PageHeader
          description="Keep your data accessible, verifiable, and free from centralized control with the world's largest decentralized storage network."
          title="Preserving humanity's most important information"
        />
        <CardGrid as="ul" cols="lgThree">
          <Card
            as="li"
            title="Build on Filecoin"
            description="Learn how to store AI data, deploy dApps, and integrate smart contracts with guides, tools, and a growing dev community."
            backgroundVariant="light"
            icon={{
              component: BracketsAngleIcon,
              position: 'side',
              size: 'sm',
            }}
          />
          <Card
            as="li"
            title="Store your data"
            description="Keep your data secure and verifiable with built-in authenticity and integrity."
            backgroundVariant="light"
            icon={{
              component: HardDriveIcon,
              position: 'side',
              size: 'sm',
            }}
          />
          <Card
            as="li"
            title="Become a storage provider"
            description="Connect your data center to global, decentralized infrastructure open to everyone."
            backgroundVariant="light"
            icon={{
              component: DatabaseIcon,
              position: 'side',
              size: 'sm',
            }}
          />
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
          <Card
            as="li"
            title="Tap into global demand"
            description="Connect with global clients seeking blockchain-based, permissionless storage — powering AI, crypto innovation, media organizations, scientific research, and more."
            backgroundVariant="dark"
          />
          <Card
            as="li"
            title="Diversify revenue streams"
            description="Earn from both storage and retrieval deals — turning idle capacity and hardware into income in an ecosystem built for the future."
            backgroundVariant="dark"
          />
          <Card
            as="li"
            title="Scale on your terms"
            description="Start with existing hardware and scale as demand grows. Expand capacity, offer new services, and evolve alongside a global network."
            backgroundVariant="dark"
          />
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
          <Card
            as="li"
            title="Decentralized & permissionless"
            description="Anyone can store or provide data — no central gatekeepers, no barriers to entry."
            backgroundVariant="light"
            icon={{
              component: ShareNetworkIcon,
              position: 'top',
            }}
          />
          <Card
            as="li"
            title="Verifiable storage"
            description="Cryptographic proofs ensure your data remains accessible and tamper-proof with onchain audits that guarantee authenticity and integrity."
            backgroundVariant="light"
            icon={{
              component: ShieldCheckIcon,
              position: 'top',
            }}
          />
          <Card
            as="li"
            title="Composable & open‑source"
            description="Integrated with IPFS and EVM-compatible chains. Build and innovate freely in an open, developer-first ecosystem."
            backgroundVariant="light"
            icon={{
              component: PuzzlePieceIcon,
              position: 'top',
            }}
          />
          <Card
            as="li"
            title="Global reach, local resilience"
            description="Ever-growing storage capacity across a global network of independent data centers ensures accessibility, redundancy, and resilience."
            backgroundVariant="light"
            icon={{
              component: GlobeIcon,
              position: 'top',
            }}
          />
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
          <li className="flex items-center gap-5">
            <SlackLogoIcon size={24} />
            <a href="#">Chat on Slack</a>
          </li>
          <li className="flex items-center gap-5">
            <GithubLogoIcon size={24} />
            <a href="#">Get involved on GitHub</a>
          </li>
          <li className="flex items-center gap-5">
            <BookIcon size={24} />
            <a href="#">Explore the documentation</a>
          </li>
          <li className="flex items-center gap-5">
            <CodeIcon size={24} />
            <a href="#">Join the Protocol Labs Developer Guild </a>
          </li>
        </CardGrid>
      </PageSection>
    </>
  )
}
