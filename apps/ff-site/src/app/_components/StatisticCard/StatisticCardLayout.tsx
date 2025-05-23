import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type StatisticCardLayoutProps = {
  icon: IconProps['component']
  children: React.ReactNode
}

function StatisticCardLayout({ icon, children }: StatisticCardLayoutProps) {
  return (
    <li className="border-brand-300 flex min-h-32 rounded-lg border p-1">
      <figure className="bg-brand-500 grid w-1/3 place-items-center rounded-sm">
        <Icon component={icon} color="accent" size={40} />
      </figure>
      <div className="flex w-2/3 place-items-center p-4">
        <div className="space-y-2">{children}</div>
      </div>
    </li>
  )
}

export { StatisticCardLayout }
