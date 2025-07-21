import { clsx } from 'clsx'

type Theme = 'dark' | 'light'

type ThemeClasses = {
  container: string
  divider: string
}

const themeClasses: Record<Theme, ThemeClasses> = {
  dark: {
    container: 'divide-zinc-50/30 bg-blue-950 text-white',
    divider: 'divide-zinc-50/30',
  },
  light: {
    container: 'divide-zinc-950/15 text-zinc-950',
    divider: 'divide-zinc-950/15',
  },
}

export type ColumnProps = {
  title: string
  features: Array<string>
  theme: Theme
}

export function Column({ title, features, theme }: ColumnProps) {
  const classes = themeClasses[theme]

  return (
    <div className={clsx('divide-y text-center', classes.container)}>
      <div className="py-10 text-2xl font-medium sm:py-20">{title}</div>
      <ul className={clsx('space-y-3 divide-y', classes.divider)}>
        {features.map((feature, index) => (
          <li key={index} className="px-4 py-6 text-xl sm:py-8">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
