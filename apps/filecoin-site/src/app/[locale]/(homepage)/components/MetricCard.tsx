export type MetricCardProps = {
  title: string
  subTitle: string
  description: string
  as?: React.ElementType
}

export function MetricCard({
  title,
  subTitle,
  description,
  as: Tag = 'li',
}: MetricCardProps) {
  return (
    <Tag className="flex h-full flex-col gap-8 text-center">
      <div className="space-y-2">
        <h3 className="text-5xl text-white">{title}</h3>
        <p className="text-xl text-[var(--color-subheading-text)]">
          {subTitle}
        </p>
      </div>
      <p className="flex-1 text-pretty text-[var(--color-paragraph-text)] xl:mx-auto xl:max-w-xs">
        {description}
      </p>
    </Tag>
  )
}
