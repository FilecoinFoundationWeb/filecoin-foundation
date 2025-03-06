import {
  DescriptionText,
  type DescriptionTextType,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { clsx } from 'clsx'

type PageSectionProps = {
  kicker: string
  title: string
  children?: React.ReactNode
  description?: DescriptionTextType
  centerText?: boolean
}

export function PageSection({
  kicker,
  title,
  description,
  children,
  centerText,
}: PageSectionProps) {
  return (
    <section>
      <div
        className={clsx(
          'mb-16 flex max-w-2xl flex-col gap-8',
          centerText && 'lg:mx-auto lg:text-center',
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
    </section>
  )
}
