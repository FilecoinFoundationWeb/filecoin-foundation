import clsx from 'clsx'

import { BasicCard } from '@/components/BasicCard'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

export type OrbitAmbassadorCardProps = {
  index: number
  image: StaticImageProps
  name: string
  testimonial: Array<string> | Array<JSX.Element>
  location: string
}

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

export function OrbitAmbassadorCard({
  index,
  image,
  name,
  testimonial,
  location,
}: OrbitAmbassadorCardProps) {
  const isImagePositionOdd = index % 2 === 1

  return (
    <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <div
        className={clsx(
          'relative col-span-1 h-48 sm:h-64 lg:h-auto',
          isImagePositionOdd && 'lg:order-last',
        )}
      >
        <StaticImage
          {...image}
          fill
          className="h-full w-full rounded-lg"
          sizes={buildImageSizeProp({
            startSize: '100vw',
            lg: '984px',
          })}
        />
      </div>
      <div className="col-span-1 lg:col-span-2">
        <BasicCard>
          <div className="space-y-6">
            {testimonial.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <div>
              <p className="font-bold">{name}</p>
              <p className="text-brand-300">— {location}</p>
            </div>
          </div>
        </BasicCard>
      </div>
    </article>
  )
}
