import { clsx } from 'clsx'

import type { FormTextareaProps } from './FormTextarea'

type CharacterCounterProps = {
  count: FormTextareaProps['characterCount']
  limit: FormTextareaProps['characterLimit']
}

export function CharacterCounter({ count, limit }: CharacterCounterProps) {
  return (
    <p
      className={clsx(
        'text-sm',
        count > limit ? 'text-red-400' : 'text-brand-300',
      )}
    >
      {count} / {limit}
    </p>
  )
}
