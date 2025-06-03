import clsx from 'clsx'

type MobileTableOfContentsWrapperProps = {
  children: React.ReactNode
}

const topPadding = {
  value: 'pt-6',
  offset: '-mt-6',
}

export function MobileTableOfContentsWrapper({
  children,
}: MobileTableOfContentsWrapperProps) {
  return (
    <div
      className={clsx(
        'bg-brand-800 sticky top-0 z-10 order-first block pb-1 lg:hidden',
        topPadding.value,
        topPadding.offset,
      )}
    >
      {children}
    </div>
  )
}
