type LinkDescriptionProps = {
  children: string
}

export function LinkDescription({ children }: LinkDescriptionProps) {
  return <p className="text-(--color-paragraph-text)">{children}</p>
}
