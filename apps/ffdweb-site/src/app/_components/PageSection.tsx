import {
  DescriptionText,
  type DescriptionTextType,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { clsx } from 'clsx'

export type PageSectionProps = {
  kicker: string
  title: string
  children?: React.ReactNode
  description?: DescriptionTextType
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
    <Tag className="space-y-16">
      <div
        className={clsx(
          'flex max-w-2xl flex-col gap-8',
          isCentered && 'lg:mx-auto lg:text-center',
        )}
      >
        <span className="inline-block font-bold text-neutral-200">
          {kicker}
        </span>

        <Heading tag="h2" variant="3xl-medium">
          {title}
        </Heading>

        {description && <DescriptionText>{description}</DescriptionText>}
      </div>

      {children}
    </Tag>
  )
}
