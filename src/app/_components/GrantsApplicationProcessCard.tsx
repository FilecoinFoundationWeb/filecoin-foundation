import { Heading } from '@/components/Heading'
import { NumberBadge } from '@/components/NumberBadge'

type GrantsApplicationProcessCardProps = {
  step: number
  title: string
  description: React.ReactNode
  as?: React.ElementType
}

export function GrantsApplicationProcessCard({
  title,
  step,
  description,
  as: Tag = 'li',
}: GrantsApplicationProcessCardProps) {
  return (
    <Tag className="space-y-6">
      <NumberBadge number={step} />

      <div className="space-y-4">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </Tag>
  )
}
