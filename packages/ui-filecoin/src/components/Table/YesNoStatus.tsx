import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

type ProviderTableInpiStatusProps = {
  status: 'yes' | 'no'
}

export function YesNoStatus({ status }: ProviderTableInpiStatusProps) {
  const isYes = status === 'yes'

  const Icon = isYes ? CheckCircleIcon : XCircleIcon
  const text = isYes ? 'Yes' : 'No'

  return (
    <div className="flex items-center gap-1.5">
      <Icon
        size={20}
        className={clsx(isYes ? 'text-brand-600' : 'text-zinc-600')}
      />
      <span>{text}</span>
    </div>
  )
}
