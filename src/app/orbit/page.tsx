import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { OrbitAmbassadorCard } from '@/components/OrbitAmbassadorCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StaticImage } from '@/components/StaticImage'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

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
        <div className="flex flex-col gap-y-6">
          {ambassadorsData.map((ambassadorData, index) => {
            const { image, ...cardProps } = ambassadorData
            const isPositionOdd = index % 2 === 1

            return (
              <div
                key={index}
                className="grid grid-cols-1 gap-6 lg:grid-cols-3"
              >
                <div
                  className={clsx(
                    'relative col-span-1 h-48 sm:h-64 lg:h-auto',
                    isPositionOdd && 'lg:order-last',
                  )}
                >
                  <StaticImage
                    {...image}
                    fill
                    className="h-full w-full rounded-lg"
                    sizes={buildImageSizeProp({
                      startSize: '100vw',
                      lg: '984px',
                    })}
                  />
                </div>

                <div className="col-span-1 lg:col-span-2">
                  <OrbitAmbassadorCard {...cardProps} />
                </div>
              </div>
            )
          })}
        </div>
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
