import { Heading } from '@/components/Heading'

type GrantsApplicationProcessCardProps = {
  step: number
  title: string
  description: React.ReactNode
  as?: React.ElementType
}

type NumberBadgeProps = {
  number: number
}

function NumberBadge({ number }: NumberBadgeProps) {
  return (
    <div className="grid size-11 place-items-center rounded-full bg-blue-500">
      <span className="text-2xl font-bold">{number}</span>
    </div>
  )
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
