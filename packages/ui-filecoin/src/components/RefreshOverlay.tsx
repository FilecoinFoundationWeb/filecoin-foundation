import { clsx } from 'clsx'

import { Spinner } from './Spinner'

type RefreshOverlayProps = {
  isRefetching: boolean
  children: React.ReactNode
}

export function RefreshOverlay({
  isRefetching,
  children,
}: RefreshOverlayProps) {
  if (!isRefetching) {
    return children
  }

  return (
    <div className="relative isolate">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Spinner message="Refreshing" />
      </div>

      <div className={clsx(isRefetching && 'pointer-events-none opacity-50')}>
        {children}
      </div>
    </div>
  )
}
