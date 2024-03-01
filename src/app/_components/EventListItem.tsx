import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { EventData } from '@/types/eventTypes'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

export function EventListItem({ event }: { event: EventData }) {
  const { slug, title, image, description, cta, startDate, endDate } = event

  const formattedStartDate = formatDate(startDate, 'event')
  const formattedEndDate = endDate ? formatDate(endDate, 'event') : null

  return (
    <li>
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || ''}
          width={300}
          height={330}
          className="block object-cover"
        />
      )}
      <div>
        {startDate && <span>{formattedStartDate}</span>}
        {endDate && <span> - {formattedEndDate}</span>}
      </div>
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
      <TextLink href={cta?.url || `${PATHS.EVENTS.path}/${slug}`}>
        {cta?.text || 'Learn More'}
      </TextLink>
    </li>
  )
}
