import { Button } from '@headlessui/react'
import clsx from 'clsx'

import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import { PARTNERSHIP_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

import { projectsViewConfigs } from '../constants/viewConfigs'

const TOUCH_TARGET = {
  touchAreaPadding: 'p-3',
  touchAreaOffset: '-mx-3',
} as const satisfies TouchTarget

export function PartnershipToggleFilter() {
  const [activeOption, setActiveOption] = useListboxQueryState({
    key: PARTNERSHIP_KEY,
    options: projectsViewConfigs,
  })

  return (
    <div className="flex gap-5 sm:gap-8">
      {projectsViewConfigs.map((partnershipConfig) => (
        <Button
          key={partnershipConfig.id}
          className={clsx(
            'focus:brand-outline cursor-pointer text-sm font-bold sm:text-base md:text-lg',
            TOUCH_TARGET.touchAreaPadding,
            TOUCH_TARGET.touchAreaOffset,
            activeOption.id === partnershipConfig.id
              ? 'text-neutral-50'
              : 'text-neutral-400',
          )}
          onClick={() => {
            if (activeOption.id !== partnershipConfig.id) {
              setActiveOption(partnershipConfig)
            }
          }}
        >
          {partnershipConfig.name}
        </Button>
      ))}
    </div>
  )
}
