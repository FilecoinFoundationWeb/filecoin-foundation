import { Heading } from '@/components/Heading'
import { Icon, type IconProps } from '@/components/Icon'

type NoResultsMessageProps = {
  icon: IconProps['component']
  title: string
  children: React.ReactNode
}

export function NoResultsMessage({
  icon,
  title,
  children,
}: NoResultsMessageProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-brand-200">
      <span className="grid size-16 place-items-center rounded-full bg-brand-700 text-brand-300">
        <Icon component={icon} />
      </span>
      <Heading tag="h3" variant="xl">
        {title}
      </Heading>
      {children}
    </div>
  )
}
