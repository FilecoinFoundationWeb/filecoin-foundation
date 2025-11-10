type LinkLabelProps = {
  children: string
}

export function LinkLabel({ children }: LinkLabelProps) {
  return <p className="navigation-menu-link-label">{children}</p>
}
