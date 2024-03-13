type SectionDividerProps = {
  title: string
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="text-sm font-light uppercase text-brand-300">
        {title}
      </span>
      <div className="h-px flex-1 bg-brand-300" />
    </div>
  )
}
