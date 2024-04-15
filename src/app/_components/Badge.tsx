interface BadgeProps {
  children: React.ReactNode
  badgeType: 'primary' | 'ghost'
}

export function Badge({ children, badgeType }: BadgeProps) {
  switch (badgeType) {
    case 'primary': {
      return (
        <span className="inline-block max-w-fit rounded-lg bg-brand-300 px-2 py-1 text-center text-xs font-semibold text-brand-800">
          {children}
        </span>
      )
    }

    case 'ghost': {
      return (
        <span className="inline-block max-w-fit rounded-lg border border-current bg-transparent px-2 py-1 text-center text-xs font-semibold text-brand-100">
          {children}
        </span>
      )
    }
  }
}
