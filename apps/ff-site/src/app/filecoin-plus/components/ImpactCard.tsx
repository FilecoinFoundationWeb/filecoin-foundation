import {
  type DescriptionProps,
  DescriptionText,
} from '@filecoin-foundation/ui/DescriptionText'
import { type HeadingProps, Heading } from '@filecoin-foundation/ui/Heading'
import { type TagProps, TagLabel } from '@filecoin-foundation/ui/TagComponents'
import {
  type SmartTextLinkProps,
  SmartTextLink,
} from '@filecoin-foundation/ui/TextLink/SmartTextLink'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { AlternatingImageCard } from '@/components/AlternatingImageCard'

export type ImpactData = {
  label: TagProps['children']
  title: HeadingProps['children']
  description: DescriptionProps['children']
  cta: { href: SmartTextLinkProps['href']; text: string }
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
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>

        <DescriptionText>{description}</DescriptionText>
        <SmartTextLink href={cta.href} baseDomain={BASE_DOMAIN}>
          {cta.text}
        </SmartTextLink>
      </div>
    </AlternatingImageCard>
  )
}
