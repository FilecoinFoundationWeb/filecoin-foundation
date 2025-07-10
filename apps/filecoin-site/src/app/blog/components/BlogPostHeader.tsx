import Image from 'next/image'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import { BlogPostContainer } from './BlogPostContainer'
import { Categories } from './Categories'

type BlogPostHeaderProps = {
  image: string
  categories: Array<string> | string
  title: string
  author: string
  date: Date
}

export function BlogPostHeader({
  image,
  categories,
  title,
  author,
  date,
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="relative mb-10 min-h-80">
        <Image
          fill
          priority
          quality={100}
          src={image}
          alt=""
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <Container>
        <BlogPostContainer>
          <div className="mb-10 flex justify-between">
            <Categories categories={categories} />
            <p>Share Post Component</p>
          </div>

          <SectionDivider variant="light" />

          <p className="mt-16 mb-8 font-mono text-sm text-zinc-800">
            {author} |{' '}
            {date.toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </p>

          <Heading tag="h1" variant="4xl-medium">
            {title}
          </Heading>
        </BlogPostContainer>
      </Container>
    </header>
  )
}
