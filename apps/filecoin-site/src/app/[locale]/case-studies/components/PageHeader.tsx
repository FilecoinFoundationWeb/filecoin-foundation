import Image from 'next/image'
import type { ImageProps } from 'next/image'

import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import {
  PageHeader as SharedPageHeader,
  type PageHeaderProps as SharedPageHeaderProps,
} from '@filecoin-foundation/ui-filecoin/PageHeader'

type PageHeaderProps = {
  label?: string
  image?: ImageProps
} & SharedPageHeaderProps

export function PageHeader({
  label,
  image,
  ...pageHeaderProps
}: PageHeaderProps) {
  return (
    <header className="grid max-w-full grid-cols-1 gap-25 xl:grid-cols-2 xl:gap-15">
      <div className="space-y-6">
        {label && (
          <div className="flex">
            <Badge variant="primary">{label}</Badge>
          </div>
        )}

        <SharedPageHeader {...pageHeaderProps} />
      </div>

      {image && image.src && (
        <div className="relative aspect-video w-full">
          <Image
            fill
            src={image.src}
            alt={image.alt || ''}
            className="rounded-xl object-cover"
          />
        </div>
      )}
    </header>
  )
}
