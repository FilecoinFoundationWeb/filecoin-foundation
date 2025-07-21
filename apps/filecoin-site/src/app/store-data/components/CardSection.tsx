type CardSectionProps = {
  title: string
  children: React.ReactNode
}

export function CardSection({ title, children }: CardSectionProps) {
  return (
    <div>
      <h4 className="mb-4 font-medium text-zinc-950">{title}</h4>
      {children}
    </div>
  )
}
