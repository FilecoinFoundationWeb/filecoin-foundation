type NoBreadCrumbsLayoutProps = {
  children: React.ReactNode
}

export function NoBreadCrumbsLayout({ children }: NoBreadCrumbsLayoutProps) {
  return <div className="mt-8">{children}</div>
}
