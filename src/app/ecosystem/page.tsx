import Image from 'next/image'
import Link from 'next/link'

import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { FeaturedEcosystemProjects } from '@/components/FeaturedEcosystemProjects'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { EcosystemClient } from './EcosystemClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects = getEcosystemProjectsData()

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

const featuredPartners = [
  {
    name: 'CERN',
    logo: 'https://fil.org/assets/external/657c554936d014492b49467c_vector-01.svg',
    url: 'https://home.cern/',
  },
  {
    name: 'Internet Archive',
    logo: 'https://fil.org/assets/external/657c558f53eeab31a03a832f_vector-05.svg',
    url: 'https://archive.org/',
  },
  {
    name: 'OpenSea',
    logo: 'https://fil.org/assets/external/657c5552385589133a43d5ab_vector-02.svg',
    url: 'https://opensea.io/',
  },
  {
    name: 'Solana',
    logo: 'https://fil.org/assets/external/657c558a515f5c15575cb1dc_vector-04.svg',
    url: 'https://solana.com/',
  },
  {
    name: 'GenRAIT',
    logo: 'https://fil.org/assets/external/657c556868aea6c85dcf1259_vector-08.svg',
    url: 'https://www.genrait.com/',
  },
  {
    name: 'Lab Dao',
    logo: 'https://fil.org/assets/external/657c55783ec4a13eefcc1be8_vector-06.svg',
    url: 'https://www.labdao.xyz/',
  },
  {
    name: 'Victor Chang Research Institute',
    logo: 'https://fil.org/assets/external/657c557001161cabdda6c5e4_vector-07.svg',
    url: 'https://www.victorchang.edu.au/',
  },
]

export default function Ecosystem() {
  return (
    <>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        title={title}
        description={description}
        link={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />

      <section>
        <Heading tag="h2" variant="xl">
          Featured Partners
        </Heading>
        <ul className="list-none flex gap-8 items-center">
          {featuredPartners.map(({ name, logo, url }) => (
            <li key={name} className="relative ml-0 mb-0 size-24 inline-flex">
              <Image
                fill
                priority
                src={logo}
                alt={`${name} Logo`}
                className="object-contain"
              />
              <a
                href={url}
                className="absolute inset-0"
                title={`Visit ${name}`}
              >
                <span className="sr-only">Visit {name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <FeaturedEcosystemProjects />
      </section>

      <section>
        <Heading tag="h2" variant="xl">
          Ecosystem Projects
        </Heading>
        <p className="mb-6">
          Discover the diverse landscape of Filecoin projects
        </p>

        <EcosystemClient projects={ecosystemProjects} />
      </section>

      <section>
        <a href={FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm}>
          <Heading tag="h2" variant="xl">
            Become Part of the Expanding Ecosystem
          </Heading>
          <p>
            If you&apos;re building on Filecoin and don&apos;t see your project
            or want to edit your listing, share your details.
          </p>
          <span>Submit or Update Your Project</span>
        </a>

        <Link href={PATHS.EVENTS.path}>
          <Heading tag="h2" variant="xl">
            Join Us IRL
          </Heading>
          <p>
            Engage in inspiring conversation, participate in hands-on workshops,
            and learn from industry leaders at our events.
          </p>
        </Link>

        <a href={FILECOIN_FOUNDATION_URLS.newsletter}>
          <Heading tag="h2" variant="xl">
            Dive Deeper
          </Heading>
          <p>
            Subscribe to our newsletter for big ideas and news about the
            Filecoin ecosystem and the decentralized web.
          </p>
        </a>
      </section>

      <section>
        <header>
          <Heading tag="h2" variant="xl">
            Case Studies
          </Heading>
          <p>
            Learn about leading projects using Filecoin solutions to preserve
            humanity&apos;s most important information.
          </p>
        </header>

        <FeaturedCaseStudies />
      </section>
    </>
  )
}
