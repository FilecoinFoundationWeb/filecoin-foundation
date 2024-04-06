type PageLayoutProps = {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return <div className="flex flex-col gap-24 sm:gap-16">{children}</div>
}
