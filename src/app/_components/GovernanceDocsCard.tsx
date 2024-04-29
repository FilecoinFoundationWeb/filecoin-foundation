import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { CustomLink } from '@/components/CustomLink'
import { type HeadingProps, Heading } from '@/components/Heading'

type GovernanceDocsCardProps = {
  heading: HeadingProps
  cta: {
    href: string
    text: string
  }
  children: React.ReactNode
}

export function GovernanceDocsCard({
  heading,
  cta,
  children,
}: GovernanceDocsCardProps) {
  return (
    <div className="relative flex flex-col justify-between gap-3 rounded-lg border border-brand-500 bg-brand-700 bg-opacity-10 p-4 backdrop-blur-md">
      <div className="mb-10 flex flex-col gap-3">
        <Heading {...heading} />
        <p>{children}</p>
      </div>
      <CustomLink
        href={cta.href}
        className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-brand-100"
      >
        <span className="absolute bottom-4 left-4 flex items-center gap-2 text-brand-300">
          {cta.text}
          <ArrowUpRight size={24} />
        </span>
      </CustomLink>
    </div>
  )
}
