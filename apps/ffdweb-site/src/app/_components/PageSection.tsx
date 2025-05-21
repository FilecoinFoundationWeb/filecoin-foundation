import { clsx } from 'clsx'

import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'

import { Kicker } from './Kicker'

export type PageSectionProps = {
  kicker: string
  title: string
  children?: React.ReactNode
  description?: DescriptionProps['children']
  isCentered?: boolean
  as?: React.ElementType
}

export function PageSection({
  kicker,
  title,
  description,
  children,
  isCentered,
  as: Tag = 'section',
}: PageSectionProps) {
  return (
    <Tag className="flex flex-col space-y-16">
      <div
        className={clsx(
          'flex max-w-2xl flex-col gap-8',
          isCentered && 'max-w-xl lg:mx-auto lg:text-center',
        )}
      >
        <Kicker>{kicker}</Kicker>

        <Heading tag="h2" variant="3xl-medium">
          {title}
        </Heading>

        {description && <DescriptionText>{description}</DescriptionText>}
      </div>

      {children}
    </Tag>
  )
}
