type LoadingContainerProps = {
  children: React.ReactNode
}

export function LoadingContainer({ children }: LoadingContainerProps) {
  return (
    <div className="flex h-60 flex-col items-center justify-center rounded-2xl bg-zinc-200 p-5">
      {children}
    </div>
  )
}
