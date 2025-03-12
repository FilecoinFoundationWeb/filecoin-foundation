export type SectionDividerProps = {
  title: string
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="section-divider flex items-center gap-2">
      <span className="text-sm font-light uppercase">{title}</span>
      <hr className="flex-1" />
    </div>
  )
}
