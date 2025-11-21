type LinkDescriptionProps = {
  children: string
}

export function LinkDescription({ children }: LinkDescriptionProps) {
  return <p className="navigation-menu-link-description">{children}</p>
}
