import Image from 'next/image'
import Link from 'next/link'

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'

import type { MemberData } from '@/types/memberType'

type KeyMemberCardProps = MemberData

export function KeyMemberCard({
  name,
  title,
  linkedin,
  image,
}: KeyMemberCardProps) {
  return (
    <li aria-label={`${name}'s profile.`}>
      <Link
        href={linkedin}
        aria-label={`Visit ${name}'s LinkedIn profile.`}
        className="flex rounded-lg border border-brand-500 p-1 "
      >
        <Image
          src={image}
          alt={`Photo of ${name}`}
          sizes="10rem"
          className="aspect-[3/4] w-32 rounded object-cover"
        />

        <div className="m-3 flex grow flex-col justify-between">
          <div>
            <Heading tag="h3" variant="lg">
              {name}
            </Heading>

            <p className="mt-1 text-brand-300">{title}</p>
          </div>

          <span className="flex items-center gap-2 text-brand-300">
            <Icon component={LinkedinLogo} />
            <span>LinkedIn</span>
          </span>
        </div>
      </Link>
    </li>
  )
}
