import { WarningIcon } from '@phosphor-icons/react/dist/ssr'

import { Heading, type HeadingProps } from './Heading'
import { Icon, type IconProps } from './Icon'
import { StateCard } from './StateCard'

export type EmptyErrorCardProps = {
  IconComponent?: IconProps['component']
  title: HeadingProps['children']
  titleTag: HeadingProps['tag']
  description: string
  children?: React.ReactNode
}

export function ErrorStateCard({
  IconComponent = WarningIcon,
  title,
  titleTag,
  description,
  children,
}: EmptyErrorCardProps) {
  return (
    <StateCard border="solid">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <span className="grid size-15 place-items-center rounded-full border border-red-200 bg-red-100 text-red-500">
          <Icon component={IconComponent} size={30} />
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
