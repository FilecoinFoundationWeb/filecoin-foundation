import Image from 'next/image'

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { TextLink } from '@/components/TextLink'

import type { MemberData } from '@/types/memberType'

type KeyMemberCardProps = MemberData

export function KeyMemberCard({
  name,
  title,
  linkedin,
  image,
}: KeyMemberCardProps) {
  return (
    <li className="flex rounded-lg border border-brand-500 p-1">
      <Image
        src={image}
        alt={`Photo of ${name}`}
        sizes="10rem"
        className="aspect-[3/4] w-32 rounded object-cover"
      />

      <div className="relative m-3 grow">
        <Heading isClamped tag="h3" variant="lg">
          {name}
        </Heading>

        <p className="mt-1 text-brand-300">{title}</p>

        <TextLink
          href={linkedin}
          aria-label={`Visit ${name}'s LinkedIn profile.`}
          className="absolute inset-0 rounded-lg focus:outline focus:outline-2 focus:outline-brand-100"
        >
          <span className="absolute bottom-0 left-0 flex items-center gap-2 text-brand-300">
            <Icon component={LinkedinLogo} />
            <span>LinkedIn</span>
          </span>
        </TextLink>
      </div>
    </li>
  )
}
