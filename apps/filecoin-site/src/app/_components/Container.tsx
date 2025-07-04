type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-[1440px] px-8">{children}</div>
}
