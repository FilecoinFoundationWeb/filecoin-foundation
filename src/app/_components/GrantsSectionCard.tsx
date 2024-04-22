import { Heading, HeadingProps } from '@/components/Heading'

type GrantsSectionCardProps = {
  heading: HeadingProps
  children: string
}

export function GrantsSectionCard({
  heading,
  children,
}: GrantsSectionCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <Heading {...heading} />
      <p>{children}</p>
    </div>
  )
}
