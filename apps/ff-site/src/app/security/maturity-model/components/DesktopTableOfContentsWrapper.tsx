type DesktopTableOfContentsWrapperProps = {
  children: React.ReactNode
}

export function DesktopTableOfContentsWrapper({
  children,
}: DesktopTableOfContentsWrapperProps) {
  return (
    <div className="hidden lg:sticky lg:top-12 lg:order-last lg:block lg:w-72">
      {children}
    </div>
  )
}
