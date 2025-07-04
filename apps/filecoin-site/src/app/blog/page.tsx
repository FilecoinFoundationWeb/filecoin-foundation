import Link from 'next/link'

import { Container } from '@/components/Container'
import { Title } from '@/components/PageHeader/Title'
import { PageSection } from '@/components/PageSection'

import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const posts = await getBlogPostsData()

  return (
    <Container>
      <PageSection>
        <Title backgroundVariant="light">Blog</Title>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </Container>
  )
}
