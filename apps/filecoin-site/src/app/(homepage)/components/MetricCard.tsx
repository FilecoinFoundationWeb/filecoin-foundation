type MetricCardProps = {
  title: string
  subTitle: string
  description: string
}

export function MetricCard({ title, subTitle, description }: MetricCardProps) {
  return (
    <div className="flex h-full max-w-sm flex-col gap-8 text-center">
      <div className="space-y-2">
        <h3 className="text-5xl text-white">{title}</h3>
        <p className="text-xl text-[var(--color-text-subheading)]">
          {subTitle}
        </p>
      </div>
      <p className="flex-1 text-[var(--color-text-paragraph)]">{description}</p>
    </div>
  )
}
