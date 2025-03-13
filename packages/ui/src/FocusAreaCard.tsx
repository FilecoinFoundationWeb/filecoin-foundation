import Image from 'next/image'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

type FocusAreaImageProps = StaticImageProps & {
  sizes?: string
}

export type FocusAreaCardProps = {
  title: string
  children: React.ReactNode
  icon?: IconProps['component']
  image?: FocusAreaImageProps
}

export function FocusAreaCard({
  title,
  children,
  image,
  icon,
}: FocusAreaCardProps) {
  return (
    <li className="focus-area-card">
      {image && (
        <Image
          src={image.data}
          alt={image.alt}
          className="focus-area-card-image"
        />
      )}
      {icon && (
        <div className="accent-icon-regular">
          <Icon component={icon} size={64} />
        </div>
      )}
      <div className="focus-area-card-content">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        {children}
      </div>
    </li>
  )
}
