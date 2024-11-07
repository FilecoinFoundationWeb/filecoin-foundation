import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

type ApplyLinkProps = {
  link: NonNullable<
    AllocatorWithDatacap['application']['allocation_bookkeeping']
  >
  name: AllocatorWithDatacap['name']
}

export function ApplyLink({ link, name }: ApplyLinkProps) {
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
