import { clsx } from 'clsx'

import { backgroundVariants } from '@/components/Section'

type GradientContainerProps = React.ComponentProps<'div'> & {
  overflowY?: 'visible' | 'clip'
}

export function GradientContainer({
  children,
  className,
  overflowY = 'visible',
  ...rest
}: GradientContainerProps) {
  return (
    <div
      {...rest}
      className={clsx(
        backgroundVariants.dark,
        'relative isolate overflow-x-clip',
        overflowY === 'visible' && 'overflow-y-visible',
        overflowY === 'clip' && 'overflow-y-clip',
        className,
      )}
    >
      {children}
      {overflowY === 'clip' && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-zinc-950" />
      )}
    </div>
  )
}
