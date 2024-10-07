import { SplitContentCard } from '@/components/SplitContentCard'

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
  return (
    <SplitContentCard index={index} image={image} as="article">
      <div className="space-y-6">
        {testimonial.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-brand-300">— {location}</p>
        </div>
      </div>
    </SplitContentCard>
  )
}
