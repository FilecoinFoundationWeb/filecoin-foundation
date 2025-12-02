import { clsx } from 'clsx'

import { backgroundVariants } from '@filecoin-foundation/ui-filecoin/Section/Section'

type GradientContainerProps = React.ComponentProps<'div'> & {
  clipY?: boolean
  overlay?: boolean
}

export function GradientContainer({
  children,
  className,
  clipY,
  overlay,
  ...rest
}: GradientContainerProps) {
  return (
    <div
      {...rest}
      className={clsx(
        backgroundVariants.dark,
        'relative isolate overflow-x-clip',
        clipY ? 'overflow-y-clip' : 'overflow-y-visible',
        className,
      )}
    >
      {children}
      {overlay && (
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-50% to-zinc-950" />
      )}
    </div>
  )
}
