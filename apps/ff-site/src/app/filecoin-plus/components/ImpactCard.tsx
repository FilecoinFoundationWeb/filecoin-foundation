import { CTALink } from '@filecoin-foundation/ui/CTALink'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { AlternatingImageCard } from '@/components/AlternatingImageCard'

export type ImpactData = {
  label: string
  title: string
  description: Array<string>
  cta: CTAProps
  image: StaticImageProps
}

type ImpactCardProps = {
  index: number
} & ImpactData

export function ImpactCard({
  index,
  label,
  title,
  description,
  cta,
  image,
}: ImpactCardProps) {
  return (
    <AlternatingImageCard index={index} image={image} as="article">
      <div className="space-y-4">
        <TagLabel>{label}</TagLabel>
        <Heading tag="h3" variant="xl">
          {title}
        </Heading>
        <div className="space-y-4">
          <DescriptionText>{description}</DescriptionText>
        </div>
        <CTALink href={cta.href} baseDomain={BASE_DOMAIN}>
          {cta.text}
        </CTALink>
      </div>
    </AlternatingImageCard>
  )
}
