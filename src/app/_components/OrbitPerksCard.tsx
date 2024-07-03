import { Heading } from '@/components/Heading'
import type { IconProps } from '@/components/Icon'
import { IconBadge } from '@/components/IconBadge'

type OrbitPerksCardProps = {
  icon: IconProps['component']
  title: string
  description: string
}

export function OrbitPerksCard({
  title,
  icon,
  description,
}: OrbitPerksCardProps) {
  return (
    <li className="space-y-4">
      <IconBadge icon={icon} />
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
    </li>
  )
}
