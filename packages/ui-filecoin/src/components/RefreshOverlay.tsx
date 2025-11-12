import { SpinnerIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

type RefetchWrapperProps = {
  isRefetching: boolean
  children: React.ReactNode
}

export function RefreshOverlay({
  isRefetching,
  children,
}: RefetchWrapperProps) {
  if (!isRefetching) {
    return children
  }

  return (
    <div className="relative isolate">
      {isRefetching && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <p>Refreshing</p>
            <span className="animate-spin">
              <Icon component={SpinnerIcon} size={20} />
            </span>
          </div>
        </div>
      )}

      <div className={clsx(isRefetching && 'pointer-events-none opacity-50')}>
        {children}
      </div>
    </div>
  )
}
