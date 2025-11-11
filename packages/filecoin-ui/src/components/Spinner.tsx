import { SpinnerIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from './Icon'

type SpinnerProps = {
  text?: string
  size?: number
}

export default function Spinner({ text, size = 20 }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center gap-2" role="status">
      <span
        className="text-brand-700 flex-shrink-0 animate-spin"
        aria-labelledby="spinner-text"
      >
        <Icon component={SpinnerIcon} size={size} color="inherit" />
      </span>
      {text && <p id="spinner-text">{text}</p>}
    </div>
  )
}
