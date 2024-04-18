import { HeadingWithIcon } from './HeadingWithIcon'

type GrantsSectionCardProps = {
  heading: {
    icon: React.ReactNode
    title: string
  }
  children: React.ReactNode
}

export function GrantsSectionCard({
  heading,
  children,
}: GrantsSectionCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <HeadingWithIcon icon={heading.icon}>{heading.title}</HeadingWithIcon>
      <p>{children}</p>
    </div>
  )
}
