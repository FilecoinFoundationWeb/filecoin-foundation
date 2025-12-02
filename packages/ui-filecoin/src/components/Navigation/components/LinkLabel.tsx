type LinkLabelProps = {
  children: string
}

export function LinkLabel({ children }: LinkLabelProps) {
  return <p className="font-medium text-(--color-text-base)">{children}</p>
}
