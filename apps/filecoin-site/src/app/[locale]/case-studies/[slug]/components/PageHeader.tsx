import type { ReactNode } from 'react'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import {
  Heading,
  type HeadingProps,
} from '@filecoin-foundation/ui-filecoin/Heading'

type PageHeaderProps = {
  title: HeadingProps['children']
  description?: ReactNode
  image?: ImageProps
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <header className="space-y-10">
      <div className="flex">
        <Badge variant="primaryLight">Case Study</Badge>
      </div>
      <div className="grid max-w-full grid-cols-1 items-center gap-25 lg:grid-cols-2 lg:gap-15">
        <div className="space-y-6">
          <Heading tag="h1" variant="page-heading">
            {title}
          </Heading>

          <p className="text-pretty text-(--color-paragraph-text) md:text-xl/7">
            {description}
          </p>
        </div>

        {image && (
          <div className="relative aspect-video w-full object-cover">
            <Image fill src={image.src} alt={image.alt || ''} />
          </div>
        )}
      </div>
    </header>
  )
}
