import { CustomLink } from '@/components/CustomLink'
import { Heading } from '@/components/Heading'

type HomeExploreSectionCardProps = {
  heading: {
    icon: React.ReactNode
    title: string
  }
  cta: {
    href: string
    text: string
  }
  children: React.ReactNode
}

function HeadingWithIcon({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="text-brand-300" aria-hidden={true}>
        {icon}
      </span>
      <Heading tag="h3" variant="lg">
        {children}
      </Heading>
    </div>
  )
}

export function HomeExploreSectionCard({
  heading,
  cta,
  children,
}: HomeExploreSectionCardProps) {
  return (
    <div className="relative flex flex-col justify-between gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <div className="mb-10 flex flex-col gap-3">
        <HeadingWithIcon icon={heading.icon}>{heading.title}</HeadingWithIcon>
        <p>{children}</p>
      </div>
      <CustomLink
        href={cta.href}
        className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-white"
      >
        <span className="absolute bottom-4 left-4 text-brand-300">
          {cta.text}
        </span>
      </CustomLink>
    </div>
  )
}
