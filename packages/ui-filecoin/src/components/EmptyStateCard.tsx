import { Heading, type HeadingProps } from './Heading'
import { Icon, type IconProps } from './Icon'
import { StateCard } from './StateCard'

export type EmptyStateCardProps = {
  icon: IconProps['component']
  title: HeadingProps['children']
  titleTag: HeadingProps['tag']
  description: string
  children?: React.ReactNode
}

export function EmptyStateCard({
  icon,
  title,
  titleTag,
  description,
  children,
}: EmptyStateCardProps) {
  return (
    <StateCard variant="outlined">
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-1">
        <span className="bg-brand-50 border-brand-100 text-brand-500 grid size-15 place-items-center rounded-full border">
          <Icon component={icon} size={30} />
        </span>

        <div className="space-y-4 text-center">
          <Heading tag={titleTag} variant="card-heading">
            {title}
          </Heading>
          <p className="text-(--color-paragraph-text)">{description}</p>
        </div>

        {children}
      </div>
    </StateCard>
  )
}
