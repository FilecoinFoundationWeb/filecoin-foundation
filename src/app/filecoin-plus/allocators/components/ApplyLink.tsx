import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import type { CellContext } from '@tanstack/react-table'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import type { Allocator } from '../schemas/AllocatorSchema'

type LinkValueType = string | null
type ApplyLinkProps = CellContext<Allocator, LinkValueType>

export function ApplyLink({ getValue, row }: ApplyLinkProps) {
  const link = getValue()
  const name = row.original.name

  if (!link) {
    return null
  }

  return (
    <CustomLink
      href={link}
      className="inline-flex items-center justify-center gap-2 focus:brand-outline"
      aria-label={`Apply for ${name} allocator`}
    >
      <span>Apply</span>
      <Icon component={ArrowUpRight} size={20} />
    </CustomLink>
  )
}
