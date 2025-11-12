import { cva, type VariantProps } from 'class-variance-authority'

import { BaseLink } from './BaseLink'
import { Icon, type IconProps } from './Icon'

const cardVariants = cva(
  'relative flex gap-5 rounded-2xl border border-(--color-border-base) p-6',
  {
    variants: {
      interactive: {
        true: 'has-[a:focus]:border-brand-600 has-[a]:hover:bg-zinc-50 has-[a:focus]:bg-zinc-50',
        false: '',
      },
    },
    defaultVariants: {
      interactive: false,
    },
  },
)

export type InfoCardProps = VariantProps<typeof cardVariants> & {
  label: string
  text: string
  icon?: IconProps['component']
}

export function InfoCard({ label, text, icon }: InfoCardProps) {
  return (
    <Container>
      {icon && (
        <span className="border-brand-500 text-brand-500 grid size-15 place-items-center rounded-full border">
          <Icon component={icon} size={30} />
        </span>
      )}

      <Content>
        <Label label={label} />
        <span className="text-2xl font-bold text-(--color-text-base)">
          {text}
        </span>
      </Content>
    </Container>
  )
}

export type InfoCardLinkProps = {
  label: string
  href: string
  ariaLabel: string
  baseDomain: string
  children: string
}

export function InfoCardLink({
  label,
  href,
  ariaLabel,
  baseDomain,
  children,
}: InfoCardLinkProps) {
  return (
    <Container interactive>
      <Content>
        <Label label={label} />
        <BaseLink
          href={href}
          baseDomain={baseDomain}
          aria-label={ariaLabel}
          className="after:absolute after:inset-0 focus:outline-none"
        >
          <span className="text-brand-800 font-medium">{children}</span>
        </BaseLink>
      </Content>
    </Container>
  )
}

type ContainerProps = VariantProps<typeof cardVariants> & {
  children: React.ReactNode
}

function Container({ interactive, children }: ContainerProps) {
  return <div className={cardVariants({ interactive })}>{children}</div>
}

type ContentProps = {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <div className="flex flex-col gap-1.5">{children}</div>
}

type LabelProps = {
  label: string
}

function Label({ label }: LabelProps) {
  return <span className="text-(--color-paragraph-text)">{label}</span>
}
