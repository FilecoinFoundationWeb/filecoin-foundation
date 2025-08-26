import { clsx } from 'clsx'

import { backgroundVariants } from '@/components/Section'

type GradientContainerProps = React.ComponentProps<'div'>

export function GradientContainer({
  className,
  ...rest
}: GradientContainerProps) {
  return (
    <div
      {...rest}
      className={clsx(
        backgroundVariants.dark,
        'relative isolate overflow-x-clip overflow-y-visible',
        className,
      )}
    />
  )
}
