import Image from 'next/image'

import { clsx } from 'clsx'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { BasicCard } from '@/components/BasicCard'

import type { AmbassadorData } from '@/orbit/data/ambassadorsData'

export type OrbitAmbassadorCardProps = {
  index: number
} & AmbassadorData

export function OrbitAmbassadorCard({
  index,
  image,
  name,
  testimonial,
  location,
}: OrbitAmbassadorCardProps) {
  const isImagePositionOdd = index % 2 === 1

  return (
    <article
      className={clsx(
        'flex flex-col gap-4 lg:flex-row lg:gap-6',
        isImagePositionOdd && 'lg:flex-row-reverse',
      )}
    >
      <Image
        src={image}
        alt={image.alt}
        className="h-48 flex-shrink-0 rounded-lg object-cover sm:h-64 lg:h-auto lg:w-1/3"
        sizes={buildImageSizeProp({
          startSize: '100vw',
          lg: '33vw',
        })}
      />

      <div className="flex-grow">
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
