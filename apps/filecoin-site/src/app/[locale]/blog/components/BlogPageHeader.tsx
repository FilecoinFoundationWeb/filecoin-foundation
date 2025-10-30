import Image, { type ImageProps } from 'next/image'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'

import type { BlogPost } from '../types/blogPostType'

type BlogPageHeaderProps = {
  title: BlogPost['title']
  description: BlogPost['excerpt']
  slug: BlogPost['slug']
  image: ImageProps
}

export function BlogPageHeader({
  title,
  description,
  image,
  slug,
}: BlogPageHeaderProps) {
  return (
    <header className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[var(--color-paragraph-text)]">
            Latest updates
          </span>

          <Heading tag="h1" variant="section-heading">
            {title}
          </Heading>

          <p className="text-pretty text-[var(--color-paragraph-text)] md:text-xl/7">
            {description}
          </p>
        </div>

        <Button
          variant="primary"
          href={`${PATHS.BLOG.path}/${slug}`}
          className="w-full lg:w-fit"
        >
          Read full article
        </Button>
      </div>

      <div className="relative aspect-[3/2]">
        <Image
          fill
          priority
          className="rounded-2xl"
          quality={100}
          sizes={buildImageSizeProp({ startSize: '100vw', md: '768px' })}
          src={image.src}
          alt={image.alt}
        />
      </div>
    </header>
  )
}
