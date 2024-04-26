import { Heading } from '@/components/Heading'

export type CardStepProcessProps = {
  title: string
  step: string
  description?: string
  as?: React.ElementType
}

type StyledStepNumberProps = {
  step: string
}

export function CardStepProcess({
  title,
  step,
  description,
  as: Tag = 'li',
}: CardStepProcessProps) {
  return (
    <Tag className="space-y-4">
      <StyledStepNumber step={step} />

      <Heading tag="h3" variant="lg" className="line-clamp-2 text-ellipsis">
        {title}
      </Heading>

      <p>{description}</p>
    </Tag>
  )
}

function StyledStepNumber({ step }: StyledStepNumberProps) {
  return (
    <div className="flex h-11 w-[45px] items-center justify-center rounded-full bg-blue-500">
      <span className="flex h-7 w-[29px] items-center justify-center text-center text-2xl font-bold">
        {step}
      </span>
    </div>
  )
}
