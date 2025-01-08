import { clsx } from 'clsx'

import type { CTAProps } from '@/types/ctaType'

import { Heading } from '@/components/Heading'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

type ToolsCardContentProps = {
  cta: CTAProps,
  description: string
  listItems: Array<string>
  title: string
}

export function ToolsCardContent({
  title,
  description,
  listItems,
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
        <ul className={clsx('mt-1', listItems.length > 1 && 'list-disc pl-6')}>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <ExternalTextLink href={cta.href}>{cta.text}</ExternalTextLink>
    </div>
  )
}
