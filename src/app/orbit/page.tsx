// import clsx from 'clsx'

import { Button } from '@/components/Button'
// import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { OrbitAmbassadorCard } from '@/components/OrbitAmbassadorCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
// import { StaticImage } from '@/components/StaticImage'

// import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { attributes } from '@/content/pages/orbit.md'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { ambassadorsData } from './data/ambassadorsData'

const { header } = attributes

export default function Orbit() {
  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.imageFallback} // TODO: Add proper orbit image
        cta={[
          {
            href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorApplicationForm,
            text: 'Become an Orbit Ambassador',
          },
          {
            href: FILECOIN_FOUNDATION_URLS.orbit.ambassoadorPortal,
            text: 'Filecoin Orbit Ambassador’s Portal',
          },
        ]}
      />

      <PageSection kicker="Goals" title="Main Goals of This Program">
        <p>TODO</p>
      </PageSection>

      <PageSection kicker="Statistics" title="Since Program Launch in 2020">
        <p>TODO</p>
      </PageSection>

      <PageSection
        kicker="Upcoming Events"
        title="Global Orbit Events"
        description="All Orbit events are free to attend! Come meet the members of your Filecoin community in our upcoming events."
      >
        <div className="max-w-readable">
          <Button href={FILECOIN_FOUNDATION_URLS.orbit.eventsCalendar}>
            Check Upcoming Events
          </Button>
        </div>
      </PageSection>

      <PageSection
        kicker="Program Perks"
        title="Orbit Program Features & Perks"
        image={graphicsData.imageFallback}
        description={[
          'Host events in your community with funding and promotion from the Filecoin Foundation.',
          'Create tutorials, translate technical documentation and serve as administrators for community communication channels.',
          'Earn points through Orbit activities to unlock limited edition swag, travel reimbursements to network events, speaking slots at FIL-city events, spot at invite-only workshops and Hacker Bases.',
          'Cement yourself and your organization as key contributors to the Filecoin Ecosystem!',
        ]}
      />

      <PageSection kicker="Get Involved" title="Explore Orbit">
        <p>TODO</p>
      </PageSection>

      <PageSection kicker="Testimonials" title="Hear From Our Ambassadors">
        {ambassadorsData.map((ambassadorData, index) => {
          const { name, location, testimonial, image } = ambassadorData

          return (
            <OrbitAmbassadorCard
              key={index}
              index={index}
              image={image}
              name={name}
              testimonial={testimonial}
              location={location}
            />
          )
        })}
      </PageSection>

      <PageSection kicker="Frequency Asked Questions" title="FAQs">
        <p>TODO</p>
      </PageSection>

      <CTASection
        title="Ready to Be Involved In the Filecoin Ecosystem?"
        description="Don't miss out on the opportunity to be part of something big. Join Filecoin Orbit and help shape the future of decentralized technology!"
        cta={{
          href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorApplicationForm,
          text: 'Join Filecoin Orbit',
        }}
      />
    </PageLayout>
  )
}
