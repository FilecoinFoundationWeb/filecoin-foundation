import { SpinnerIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon, type IconProps } from './Icon'

type SpinnerProps = {
  size?: IconProps['size']
  weight?: IconProps['weight']
} & (
  | { message: string; ariaLabel?: string }
  | { message?: never; ariaLabel: string }
)

export function Spinner({ message, ariaLabel, size = 52 }: SpinnerProps) {
  const accessibleLabel = ariaLabel || message

  return (
    <div className="flex flex-col items-center gap-8" role="status">
      <span
        className="text-brand-700 shrink-0 animate-spin"
        aria-label={accessibleLabel}
      >
        <Icon component={SpinnerIcon} size={size} />
      </span>
      {message && <p>{message}</p>}
    </div>
  )
}
