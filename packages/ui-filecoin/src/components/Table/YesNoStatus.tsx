import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

type ProviderTableInpiStatusProps = {
  status: boolean
}

export function YesNoStatus({ status }: ProviderTableInpiStatusProps) {
  const Icon = status ? CheckCircleIcon : XCircleIcon
  const text = status ? 'Yes' : 'No'

  return (
    <div className="flex items-center gap-1.5">
      <Icon
        size={20}
        className={clsx(status ? 'text-brand-600' : 'text-zinc-600')}
      />
      <span>{text}</span>
    </div>
  )
}
