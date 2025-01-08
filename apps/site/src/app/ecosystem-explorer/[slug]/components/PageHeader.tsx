import Image from 'next/image'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

type PageHeaderProps = {
  src: string
}

export function PageHeader({ src }: PageHeaderProps) {
  return (
    <header className="space-y-10 md:space-y-16">
      <div className="relative h-48 md:w-3/4 lg:w-2/3 xl:w-3/5">
        <Image
          fill
          priority
          src={src}
          alt={''}
          className="rounded-lg object-contain object-left-bottom"
          sizes={buildImageSizeProp({
            startSize: '100vw',
            md: '730px',
            lg: '660px',
            xl: '600px',
          })}
        />
      </div>
    </header>
  )
}
