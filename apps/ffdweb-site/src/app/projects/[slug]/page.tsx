import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { createMetadata } from '@/utils/createMetadata'

import { getProjectData } from '../utils/getProjectData'

type ProjectProps = {
  params: Promise<SlugParams>
}

export default async function Project(props: ProjectProps) {
  const { slug } = await props.params
  const data = await getProjectData(slug)
  const { title, image, description, externalLink, featuredContent } = data

  return (
    <PageLayout gap="large">
      <ArticleLayout>
        <h1>{title}</h1>

        {externalLink && (
          <ExternalTextLink href={externalLink}>
            Visit Project Website
          </ExternalTextLink>
        )}

        {featuredContent && (
          <InternalTextLink href={featuredContent}>
            Read Blog Post
          </InternalTextLink>
        )}

        <div className="prose">
          <h2>About the Project</h2>
          <p>{description}</p>
        </div>
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateMetadata(props: ProjectProps) {
  const { slug } = await props.params
  const { title, description } = await getProjectData(slug)

  return createMetadata({
    metaTitle: `${title} | FFDW`,
    metaDescription: description,
    overrideTitle: true,
  })
}
