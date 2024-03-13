import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@/components/Button'
import { Card, CardProps } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { FeaturedBlogPosts } from '@/components/FeaturedBlogPosts'
import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/home.md'

const { title, description, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.HOME.path)

const exploreSectionCards: CardProps[] = [
  {
    title: 'Builder Resources',
    description:
      'Join thousands of developers and entrepreneurs building on the Filecoin network.',
    cta: {
      type: 'learn',
      href: '#',
    },
  },
  {
    title: 'Storage Resources',
    description:
      'Join the Filecoin network as a Storage Provider or leverage the network to store your data with robust and secure storage. ',
    cta: {
      type: 'read',
      href: '#',
    },
  },
  {
    title: 'Grants Program',
    description:
      'Learn more about support for teams building on the Filecoin network.',
    cta: {
      type: 'learn',
      href: PATHS.GRANTS.path,
    },
  },
  {
    title: 'Meet the Community',
    description:
      'Connect and collaborate with the Filecoin community around the globe! ',
    cta: {
      type: 'connect',
      href: '#',
    },
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-16">
      <div className="flex flex-col gap-6 md:w-1/2">
        <PageHeader title={title} description={description} />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:flex-col md:gap-4">
          <Button className="flex-1" variant="primary" href="#">
            Learn More
          </Button>
          <Button
            className="flex-1"
            variant="ghost"
            href="#"
            icon={<ArrowUpRight size={24} weight="bold" />}
          >
            Discover Filecoin Technology
          </Button>
        </div>
      </div>

      <PageSection
        kicker="Explore"
        title="Explore the Ecosystem"
        description="Navigate the Ecosystem Explorer, a crowd-sourced and open database to showcase the projects powering the Filecoin network. Already building on the network? Add your project!"
      >
        <CardLayout>
          {exploreSectionCards.map(({ title, description, cta }) => (
            <Card
              key={title}
              title={title}
              description={description}
              cta={{
                type: cta.type,
                href: cta.href,
              }}
              style="muted"
            />
          ))}
        </CardLayout>
      </PageSection>

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
    </div>
  )
}
