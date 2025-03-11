export type SectionDividerProps = {
  title: string
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex max-h-max items-center gap-2">
      <span className="text-brand-300 text-sm font-light uppercase">
        {title}
      </span>
      <div className="bg-brand-300 h-px flex-1" />
    </div>
  )
}
