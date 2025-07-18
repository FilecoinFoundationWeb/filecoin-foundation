type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-[1440px] px-6 md:px-15">{children}</div>
}
