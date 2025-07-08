import Image from 'next/image'

import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'

type ArticleHeaderProps = {
  image: ImageProps
  children?: React.ReactNode
}

export function BlogPostHeader({ image, children }: ArticleHeaderProps) {
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
      <div className="max-w-4xl space-y-10 m-auto">
        <div className="flex flex-col gap-4">{children}</div>
        <hr className="border-zinc-200" />
      </div>
    </header>
  )
}
