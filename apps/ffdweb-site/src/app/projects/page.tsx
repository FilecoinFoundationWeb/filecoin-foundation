import { Suspense } from 'react'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { ContactCTA } from '@/components/ContactCTA'


import { ProjectsContent } from './components/ProjectsContent'
import { PROJECTS_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getProjectsData } from './utils/getProjectData'

import { PageHeader } from '@/_components/PageHeader/PageHeader'

export default async function Projects() {
  const projects = await getProjectsData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(PROJECTS_SEO)}
      />

      <PageHeader
        kicker="Projects"
        title="Discover Current and Past FFDW Project Partners"
        image={graphicsData.projects}
      />

      <Suspense>
        <ProjectsContent projects={projects} />
      </Suspense>

      <ContactCTA />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: PROJECTS_SEO.title },
  description: PROJECTS_SEO.description,
  path: PATHS.PROJECTS.path,
  image: graphicsData.projects.data.src,
})
