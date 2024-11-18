import { Button } from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'

type SliderCloseButtonProps = {
  closeSlider: () => void
}

const TOUCH_TARGET = {
  base: 24,
  augmentingClass: 'p-3',
  offsettingClass: '-m-3',
}

export function SliderCloseButton({ closeSlider }: SliderCloseButtonProps) {
  return (
    <Button
      aria-label="Close filters"
      className={clsx(
        'text-brand-300 focus:brand-outline',
        TOUCH_TARGET.augmentingClass,
        TOUCH_TARGET.offsettingClass,
      )}
      onClick={closeSlider}
    >
      <Icon size={TOUCH_TARGET.base} component={X} />
    </Button>
  )
}
