import { Button } from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'

type SliderCloseButtonProps = {
  closeSlider: () => void
}

const TOUCH_TARGET = {
  base: 24,
  clickArea: 'p-3',
  clickAreaOffset: '-m-3',
}

export function SliderCloseButton({ closeSlider }: SliderCloseButtonProps) {
  return (
    <Button
      aria-label="Close ecosystem explorer filters"
      className={clsx(
        'text-brand-300 focus:brand-outline',
        TOUCH_TARGET.clickArea,
        TOUCH_TARGET.clickAreaOffset,
      )}
      onClick={closeSlider}
    >
      <Icon size={TOUCH_TARGET.base} component={X} />
    </Button>
  )
}
