import { clsx } from 'clsx'

import type { CTAProps } from '@/types/sharedProps/ctaType'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

type ToolsCardContentProps = {
  title: string
  description: string
  purposeList: Array<string>
  cta: CTAProps
}

export function ToolsCardContent({
  title,
  description,
  purposeList,
  cta,
}: ToolsCardContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <p className="mb-6 mt-3">{description}</p>
        <Heading tag="h4" variant="md">
          Purpose
        </Heading>
        <ul
          className={clsx(purposeList.length > 1 && 'list-disc pl-6', 'mt-2')}
        >
          {purposeList.map((purpose, index) => (
            <li key={index}>{purpose}</li>
          ))}
        </ul>
      </div>
      <TextLink href={cta.href}>{cta.text}</TextLink>
    </div>
  )
}
