import Image from 'next/image'

import CustomLink from '@/components/CustomLink'

import { EventData } from '@/types/eventTypes'

import { formatDate } from '@/utils/formatDate'

export default function EventListItem({ event }: { event: EventData }) {
  const {
    slug,
    title,
    f_image: image,
    f_description: description,
    f_cta: ctaUrl,
    'f_cta-text': ctaText,
    'f_start-date': startDate,
    'f_end-date': endDate,
    'f_event-date': eventDate,
  } = event

  const formattedStartDate = formatDate(eventDate || startDate, 'event')
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
        {formattedStartDate && <span>{formattedStartDate}</span>}
        {formattedEndDate && <span> - {formattedEndDate}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <CustomLink href={ctaUrl || `/events/${slug}`}>
        {ctaText || 'More'}
      </CustomLink>
    </li>
  )
}
