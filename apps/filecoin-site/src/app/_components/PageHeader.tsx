import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'

import { Button } from '@/components/Button'
import { Heading, type HeadingProps } from '@/components/Heading'
import { Kicker, type KickerProps } from '@/components/Kicker'

type PageHeaderProps = {
  title: HeadingProps['children']
  kicker?: KickerProps['children']
  description?: DescriptionProps['children']
  cta?: React.ReactElement<typeof Button>
}

export function PageHeader({
  title,
  kicker,
  description,
  cta,
}: PageHeaderProps) {
  return (
    <header>
      <div className="flex max-w-3xl flex-col gap-6">
        {kicker && <Kicker size="md">{kicker}</Kicker>}
        <Heading tag="h1" variant="3xl-md-5xl-medium">
          {title}
        </Heading>
        {description && <DescriptionText>{description}</DescriptionText>}
      </div>

      {cta && <div className="mt-10">{cta}</div>}
    </header>
  )
}
