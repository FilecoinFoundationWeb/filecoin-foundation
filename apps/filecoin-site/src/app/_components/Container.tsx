type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16">
      {children}
    </div>
  )
}
