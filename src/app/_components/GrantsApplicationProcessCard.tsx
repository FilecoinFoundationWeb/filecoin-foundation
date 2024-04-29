import { Heading } from '@/components/Heading'

export type GrantsApplicationProcessCardProps = {
  title: string
  step: number
  description?: string
  as?: React.ElementType
}

type BadgeNumberProps = {
  number: number
}

export function GrantsApplicationProcessCard({
  title,
  step,
  description,
  as: Tag = 'li',
}: GrantsApplicationProcessCardProps) {
  return (
    <Tag className="space-y-4">
      <BadgeNumber number={step} />

      <Heading tag="h3" variant="lg">
        {title}
      </Heading>

      <p>{description}</p>
    </Tag>
  )
}

function BadgeNumber({ number }: BadgeNumberProps) {
  return (
    <div className="flex h-11 w-[45px] items-center justify-center rounded-full bg-blue-500">
      <span className="flex h-7 w-[29px] items-center justify-center text-2xl font-bold">
        {number}
      </span>
    </div>
  )
}
