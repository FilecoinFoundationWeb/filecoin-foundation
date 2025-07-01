import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type NoResultsMessageProps = {
  icon: IconProps['component']
  title: string
  message: string
  cta?: React.ReactElement<typeof Button>
}

export function NoResultsMessage({
  icon,
  title,
  message,
  cta,
}: NoResultsMessageProps) {
  return (
    <div className="text-brand-200 flex flex-col items-center gap-4">
      <span className="bg-brand-700 text-brand-300 grid size-16 place-items-center rounded-full">
        <Icon component={icon} />
      </span>
      <Heading tag="h3" variant="xl">
        {title}
      </Heading>
      <p className="max-w-md text-center">{message}</p>
      {cta}
    </div>
  )
}
