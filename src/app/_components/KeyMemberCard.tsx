import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import type { MemberData } from '@/types/memberType'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { ImageWithFallback } from '@/components/ImageWithFallback'

type KeyMemberCardProps = MemberData

export function KeyMemberCard({
  name,
  title,
  linkedin,
  image,
}: KeyMemberCardProps) {
  const { src, height, width, blurDataURL } = image

  return (
    <li className="relative flex rounded-lg border border-brand-500 p-1">
      <ImageWithFallback
        src={src}
        height={height}
        width={width}
        blurDataURL={blurDataURL}
        alt={`Photo of ${name}`}
        sizes="150px"
        className="aspect-[3/4] w-32 rounded object-cover"
      />

      <div className="m-3 grow">
        <Heading tag="h3" variant="lg">
          {name}
        </Heading>

        <p className="mt-1 text-brand-300">{title}</p>

        <Card.Link
          href={linkedin}
          icon={LinkedinLogo}
          text="LinkedIn"
          ariaLabel={`Visit ${name}'s LinkedIn profile.`}
          left="left-36"
        />
      </div>
    </li>
  )
}
