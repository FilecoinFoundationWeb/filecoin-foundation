import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

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
        <span className="inline-block rounded border border-brand-400 px-2 py-1 text-xs text-brand-300">
          {label}
        </span>
        <h3 className="text-brand-100 text-xl font-bold">{title}</h3>
        <div className="space-y-4">
          {description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <a
          href={cta.href}
          className="text-brand-300 hover:text-brand-100 block transition-colors"
        >
          {cta.text}
        </a>
      </div>
    </AlternatingImageCard>
  )
}
