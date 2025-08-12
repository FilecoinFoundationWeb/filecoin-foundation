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
      <span
        className="text-4xl font-medium text-transparent"
        style={{
          background: 'var(--gradient-brand-dark)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {String(step).padStart(2, '0')}.
      </span>
      <Heading tag={headingTag} className="card-heading">
        {title}
      </Heading>
      <p className="text-xl text-zinc-600">{description}</p>
    </Tag>
  )
}
