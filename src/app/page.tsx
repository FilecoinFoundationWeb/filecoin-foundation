import {
  ArrowUpRight,
  Code,
  HardDrives,
  MagnifyingGlass,
  Money,
  Person,
} from '@phosphor-icons/react/dist/ssr'

import { Button } from '@/components/Button'
import { FeaturedBlogPosts } from '@/components/FeaturedBlogPosts'
import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { Heading } from '@/components/Heading'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { SectionDivider } from '@/components/SectionDivider'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/home.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

const { header, seo } = attributes
export const metadata = createMetadata(seo, PATHS.HOME.path)

export default function Home() {
  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: PATHS.ABOUT.path,
          text: 'Learn More',
        }}
        secondaryCta={{
          href: FILECOIN_URLS.site,
          text: 'Discover Filecoin Technology',
          icon: <ArrowUpRight size={24} weight="bold" />,
        }}
      />

      <section>
        <SectionDivider title="Explore" />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="flex flex-col gap-5 sm:w-1/2 sm:gap-4 lg:w-8/12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <Heading tag="h2" variant="3xl" className="self-start">
              The Filecoin Ecosystem
            </Heading>
            <div className="grid gap-4 lg:flex lg:max-w-[23rem] lg:flex-col lg:items-center lg:justify-center">
              <HomeExploreSectionCard
                heading={{
                  icon: <MagnifyingGlass size={24} />,
                  title: 'Explore the Ecosystem',
                }}
                cta={{
                  href: PATHS.ECOSYSTEM.path,
                  text: 'Explore',
                }}
              >
                Navigate the Ecosystem Explorer, a crowd-sourced and open
                database to showcase the projects powering the Filecoin network.
                Already building on the network? Add your project!
              </HomeExploreSectionCard>
              <HomeExploreSectionCard
                heading={{
                  icon: <Code size={24} />,
                  title: 'Builder Resources',
                }}
                cta={{
                  href: '#',
                  text: 'Learn More',
                }}
              >
                Join thousands of developers and entrepreneurs building on the
                Filecoin network.
              </HomeExploreSectionCard>
            </div>
          </div>
          <div className="grid gap-4 sm:w-1/2 lg:w-5/12 lg:max-w-[23rem]">
            <HomeExploreSectionCard
              heading={{
                icon: <Money size={24} />,
                title: 'Grants Program',
              }}
              cta={{
                href: PATHS.GRANTS.path,
                text: 'Learn More',
              }}
            >
              Learn more about support for teams building on the Filecoin
              network.
            </HomeExploreSectionCard>
            <HomeExploreSectionCard
              heading={{
                icon: <Person size={24} />,
                title: 'Meet the Community',
              }}
              cta={{
                href: PATHS.GET_INVOLVED.path,
                text: 'Connect',
              }}
            >
              Connect and collaborate with the Filecoin community around the
              globe!
            </HomeExploreSectionCard>
            <HomeExploreSectionCard
              heading={{
                icon: <HardDrives size={24} />,
                title: 'Storage Resources',
              }}
              cta={{
                href: '#',
                text: 'Learn More',
              }}
            >
              Join the Filecoin network as a Storage Provider or leverage the
              network to store your data with robust and secure storage.
            </HomeExploreSectionCard>
          </div>
        </div>
      </section>

      <PageSection
        kicker="Learn"
        title="Use Cases"
        description="Learn about projects building on and using Filecoin."
      >
        <FeaturedCaseStudies />
        <Button
          className="sm:self-center"
          variant="primary"
          href={PATHS.CASE_STUDIES.path}
        >
          View All
        </Button>
      </PageSection>

      <PageSection
        kicker="Stay Updated"
        title="News & Blog"
        description="The latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
      >
        <FeaturedBlogPosts />
        <Button
          className="sm:self-center"
          variant="primary"
          href={PATHS.BLOG.path}
        >
          View All
        </Button>
      </PageSection>
    </PageLayout>
  )
}
