type SectionContentWrapperProps = {
  children: React.ReactNode
}

export function SectionContentWrapper({
  children,
}: SectionContentWrapperProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-16 xl:grid-cols-2">
      {children}
    </div>
  )
}
