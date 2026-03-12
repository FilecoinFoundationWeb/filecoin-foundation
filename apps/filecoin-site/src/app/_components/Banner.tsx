'use client'

import { XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import { hash } from 'ohash'
import { useLocalStorage } from 'usehooks-ts'

import { Container } from '@filecoin-foundation/ui-filecoin/Container'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

type BannerProps = {
  text: string
}

const TOUCH_TARGET = {
  touchAreaPadding: 'p-4',
  touchAreaOffset: '-m-4',
} as const

const STORAGE_KEY_PREFIX = 'show-banner-'
const INITIAL_VISIBILITY_STATE = true

export function Banner({ text }: BannerProps) {
  const [isVisible, setIsVisible] = useLocalStorage(
    `${STORAGE_KEY_PREFIX}${hash(text)}`,
    INITIAL_VISIBILITY_STATE,
    { initializeWithValue: false },
  )

  return (
    <div
      aria-hidden={!isVisible}
      className={clsx(
        'grid transition-[grid-template-rows] duration-750 ease-in-out',
        isVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div className="overflow-hidden">
        <div role="status" className="bg-brand-800 py-3 text-center text-white">
          <Container>
            <div className="flex items-center justify-between gap-4">
              <p className="grow text-center text-xs text-balance sm:text-sm/5">
                {text}
              </p>

              <button
                type="button"
                aria-label="Dismiss banner"
                tabIndex={isVisible ? 0 : -1}
                className={clsx(
                  'focus:brand-outline shrink-0 cursor-pointer',
                  TOUCH_TARGET.touchAreaPadding,
                  TOUCH_TARGET.touchAreaOffset,
                )}
                onClick={() => setIsVisible(false)}
              >
                <Icon component={XIcon} size={16} />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
