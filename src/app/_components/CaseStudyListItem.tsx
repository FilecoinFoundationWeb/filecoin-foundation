import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { PATHS } from '@/constants/paths'

export function CaseStudyListItem({ caseStudy }: { caseStudy: CaseStudyData }) {
  const {
    slug,
    title,
    f_image: image,
    f_description: description,
    f_cta: ctaUrl,
    'f_cta-text': ctaText,
  } = caseStudy

  return (
    <li>
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || ''}
          width={280}
          height={320}
          className="block object-cover"
        />
      )}
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
      <TextLink href={ctaUrl || `${PATHS.CASE_STUDIES.path}/${slug}`}>
        {ctaText || 'More'}
      </TextLink>
    </li>
  )
}
