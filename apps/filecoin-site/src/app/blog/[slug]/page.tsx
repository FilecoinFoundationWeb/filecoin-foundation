import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { CardGrid } from '@/components/CardGrid'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Section } from '@/components/Section'

import { BlogCard } from '../components/BlogCard'
import { BlogPostContainer } from '../components/BlogPostContainer'
import { BlogPostHeader } from '../components/BlogPostHeader'
import { RelatedArticlesContainer } from '../components/RelatedArticlesContainer'
import { getBlogPostData } from '../utils/getBlogPostData'

import headerImage from '@/assets/images/042425-PDP_BlogHeader.webp'

type BlogPostProps = {
  params: Promise<SlugParams>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const data = await getBlogPostData(slug)
  const { image, categories, author, publishedOn, title, content } = data

  const dummyRelatedArticles = [data, data, data]

  return (
    <>
      <Section backgroundVariant="light">
        <div className="space-y-8 pb-30">
          <BlogPostHeader
            image={{ url: image?.url || headerImage.src }}
            categories={categories}
            author={author}
            date={publishedOn}
            title={title}
            slug={slug}
          />

          <BlogPostContainer>
            <MarkdownContent>{content}</MarkdownContent>
          </BlogPostContainer>
        </div>
      </Section>
      <Section backgroundVariant="gray">
        <RelatedArticlesContainer>
          <CardGrid variant="col3-three">
            {dummyRelatedArticles.map((post) => {
              const {
                title,
                slug,
                excerpt,
                categories,
                image,
                author,
                publishedOn,
              } = post

              return (
                <BlogCard
                  key={title}
                  slug={slug}
                  title={title}
                  description={excerpt}
                  author={author}
                  date={publishedOn}
                  tags={categories}
                  image={
                    image && {
                      src: image.url,
                      alt: title,
                    }
                  }
                />
              )
            })}
          </CardGrid>
        </RelatedArticlesContainer>
      </Section>
    </>
  )
}
