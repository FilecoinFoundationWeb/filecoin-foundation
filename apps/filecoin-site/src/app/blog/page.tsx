import { Title } from '@/components/PageHeader/Title'
import { PageSection } from '@/components/PageSection'

import { BlogCard } from './components/BlogCard'
import blogPostsData from './test-data.json'

export default async function Blog() {
  return (
    <PageSection backgroundVariant="light">
      <Title>Blog</Title>
      <ul>
        {blogPostsData.map((post: any) => (
          <BlogCard
            key={post.title}
            title={{ text: post.title }}
            description={{ text: post.excerpt }}
            author={post.author}
            date={post.date}
            tags={post.categories.map((category: string) => ({
              text: category,
            }))}
            image={{
              src: post.image.src,
              alt: post.image.alt,
            }}
            cta={{
              href: `/`,
              baseDomain: 'https://filecoin.io',
            }}
          />
        ))}
      </ul>
    </PageSection>
  )
}
