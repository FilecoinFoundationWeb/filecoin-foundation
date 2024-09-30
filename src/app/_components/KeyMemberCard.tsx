import Image from 'next/image'

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import type { MemberData } from '@/types/memberType'

import type { Speaker } from '@/schemas/event/SpeakerSchema'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'

type KeyMemberCardProps = MemberData | Speaker

export function KeyMemberCard(props: KeyMemberCardProps) {
  const { name, title, linkedin, image } = props
  const isStaticImage = typeof image.src === 'object'

  return (
    <li className="relative flex rounded-lg border border-brand-500 p-1">
      <Image
        src={image.src}
        alt={`Photo of ${name}`}
        sizes="150px"
        className="aspect-[3/4] w-32 rounded object-cover"
        {...(isStaticImage
          ? { placeholder: 'blur' }
          : { width: 150, height: 200 })}
      />

      <div className="m-3 grow">
        <Heading tag="h3" variant="lg">
          {name}
        </Heading>

        <p className="mt-1 text-brand-300">
          {title}
          {'company' in props && props.company && `, ${props.company}`}
        </p>

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
