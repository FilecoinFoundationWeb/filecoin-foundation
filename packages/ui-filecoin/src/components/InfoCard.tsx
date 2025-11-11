import { Icon, type IconProps } from './Icon'

export type InfoCardProps = {
  label: string
  children: React.ReactNode
  icon?: IconProps['component']
}

export function InfoCard({ label, children, icon }: InfoCardProps) {
  return (
    <li className="has-[a:focus]:border-brand-600 relative flex gap-5 rounded-2xl border border-(--color-border-base) p-6 has-[a]:hover:bg-zinc-50 has-[a:focus]:bg-zinc-50">
      {icon && (
        <span className="border-brand-500 text-brand-500 grid size-15 place-items-center rounded-full border">
          <Icon component={icon} size={30} />
        </span>
      )}
      <div className="flex flex-col gap-1.5">
        <p className="text-(--color-paragraph-text)">{label}</p>
        {children}
      </div>
    </li>
  )
}

type InfoCardTextProps = {
  text: string
}

export function InfoCardText({ text }: InfoCardTextProps) {
  return <p className="text-2xl font-bold text-(--color-text-base)">{text}</p>
}
