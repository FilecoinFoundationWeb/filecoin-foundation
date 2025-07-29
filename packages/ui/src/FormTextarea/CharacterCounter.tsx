import { clsx } from 'clsx'

import type { FormTextareaProps } from './FormTextarea'

type CharacterCounterProps = {
  count: FormTextareaProps['characterCount']
  max: FormTextareaProps['maxCharacter']
  min: FormTextareaProps['minCharacter']
}

export function CharacterCounter({ count, max, min }: CharacterCounterProps) {
  const isBelowMin = !!min && count < min
  const isAboveMax = count > max

  return (
    <p
      className={clsx(
        'character-counter',
        isAboveMax && 'character-counter-error',
      )}
    >
      {count} / {max}
      {isBelowMin && <span className="pl-1">(Minimum {min} characters)</span>}
    </p>
  )
}
