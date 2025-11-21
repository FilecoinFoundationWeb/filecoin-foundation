import { InfoIcon } from '@phosphor-icons/react/dist/ssr'

type AlertProps = {
  title: string
  description: string
}

export function Alert({ title, description }: AlertProps) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-100 p-5"
      role="alert"
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full border border-zinc-200 p-1 text-zinc-600"
      >
        <InfoIcon size={20} />
      </span>

      <div className="flex flex-1 flex-col gap-2">
        <span className="font-medium text-zinc-950">{title}</span>
        {description && <span className="text-zinc-600">{description}</span>}
      </div>
    </div>
  )
}
