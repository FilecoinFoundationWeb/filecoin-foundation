'use client'

import { useState } from 'react'

import { XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import Cookies from 'js-cookie'

import { Container } from '@filecoin-foundation/ui-filecoin/Container'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

export type BannerProps = {
  text: string
  cookieName: string
}

const TOUCH_TARGET = {
  visibleElementSize: 18,
  touchAreaPadding: 'p-3.5',
  touchAreaOffset: '-m-3.5',
} satisfies TouchTarget

const COOKIE_EXPIRY_DAYS = 365
const BANNER_HIDE_STATE = false

export function Banner({ text, cookieName }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  function hideBanner() {
    Cookies.set(cookieName, BANNER_HIDE_STATE.toString(), {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: 'Lax',
    })
    setIsVisible(BANNER_HIDE_STATE)
  }

  return (
    <div
      aria-hidden={!isVisible}
      className={clsx(
        'grid transition-[grid-template-rows] duration-750 ease-in-out',
        isVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div className="overflow-hidden">
        <div
          role="status"
          className="bg-brand-800 py-3.5 text-center text-white"
        >
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
                  'shrink-0 cursor-pointer focus:outline focus:outline-white',
                  TOUCH_TARGET.touchAreaPadding,
                  TOUCH_TARGET.touchAreaOffset,
                )}
                onClick={hideBanner}
              >
                <Icon
                  component={XIcon}
                  size={TOUCH_TARGET.visibleElementSize}
                />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
