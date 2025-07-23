import { Heading, type HeadingProps } from '@/components/Heading'

type StepCardProps = {
  as: 'li' | 'article' | 'div'
  step: number
  title: HeadingProps['children']
  headingTag: HeadingProps['tag']
  description: string
}

export type StepCardData = Pick<StepCardProps, 'title' | 'description'>

export function StepCard({
  as: Tag,
  step,
  title,
  headingTag,
  description,
}: StepCardProps) {
  return (
    <Tag className="flex flex-col gap-3">
      <span className="text-brand-500 text-4xl font-medium">
        {String(step).padStart(2, '0')}.
      </span>
      <Heading tag={headingTag} variant="xl-medium">
        {title}
      </Heading>
      <p className="color-zinc-600 text-xl">{description}</p>
    </Tag>
  )
}
