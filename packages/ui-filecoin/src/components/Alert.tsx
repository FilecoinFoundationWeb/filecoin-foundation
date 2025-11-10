import { InfoIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from './Icon'

type AlertProps = {
  message: string
  description?: string
}

export function Alert({ message, description }: AlertProps) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-100 p-5"
      role="alert"
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full border border-zinc-200 p-1 text-zinc-600"
      >
        <Icon component={InfoIcon} size={20} color="inherit" />
      </span>

      <div className="flex flex-1 flex-col gap-2">
        <span className="font-medium text-zinc-950">{message}</span>
        {description && <span className="text-zinc-600">{description}</span>}
      </div>
    </div>
  )
}
