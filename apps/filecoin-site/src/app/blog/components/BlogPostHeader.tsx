import Image from 'next/image'

import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'

type BlogPostHeaderProps = {
  image: ImageProps
  children: React.ReactNode
}

export function BlogPostHeader({ image, children }: BlogPostHeaderProps) {
  return (
    <header className="space-y-10">
      <div className="relative min-h-80">
        <Image
          fill
          priority
          quality={100}
          src={image.src}
          alt={image.alt}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="m-auto max-w-4xl space-y-10">
        <div className="flex justify-between">{children}</div>
        <hr className="border-zinc-200" />
      </div>
    </header>
  )
}
