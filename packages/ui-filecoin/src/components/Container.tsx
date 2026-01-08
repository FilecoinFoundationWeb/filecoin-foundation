type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-[1440px] px-6 md:px-15">{children}</div>
}

// BreakoutContainer is designed to escape Container's constraints.
// Primarily used to give tables full-width while maintaining consistent padding.
// Values must stay in sync:
// - Container spacing: px-6 md:px-15 (1.5rem / 3.75rem)
// - Container width: max-w-[1440px]

export function BreakoutContainer({ children }: ContainerProps) {
  return (
    <div className="-mx-[calc(1.5rem+max(0px,(100vw-1440px)/2))] w-screen px-6 md:-mx-[calc(3.75rem+max(0px,(100vw-1440px)/2))] md:px-15">
      {children}
    </div>
  )
}
