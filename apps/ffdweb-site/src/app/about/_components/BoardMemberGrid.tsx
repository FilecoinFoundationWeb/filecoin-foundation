import clsx from 'clsx'

type BoardMemberGridProps = {
  children: Array<React.ReactNode>
}

export function BoardMemberGrid({ children }: BoardMemberGridProps) {
  const isOdd = Boolean(children.length % 2)

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-6 lg:grid-cols-4 [&>*]:lg:col-span-2',
        isOdd && '[&>*:last-child]:lg:col-start-2',
      )}
    >
      {children}
    </div>
  )
}
