import { ListboxOption as HeadlessUIListboxOption } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'

import { Icon } from '@/components/Icon'

type OptionType = {
  id: string
  name: string
  count?: string
}
type ListboxOptionTextProps = { text: string; counts?: React.ReactNode }

type ListboxOptionProps = {
  option: OptionType
  disabled?: boolean
  count?: string
}

function OptionContent({ option, count }: ListboxOptionProps) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="text-nowrap">{option.name}</span>
      {count !== undefined && (
        <span className="ml-2 text-sm font-light">({count})</span>
      )}
    </span>
  )
}

// export function ListboxOptionText({ text, counts }: ListboxOptionTextProps) {
//   return (
//     <span>
//       {text}
//       {counts !== undefined && (
//         <span className="ml-2 text-sm font-light">({counts})</span>
//       )}
//     </span>
//   )
// }

export function ListboxOption({ option, disabled }: ListboxOptionProps) {
  return (
    <HeadlessUIListboxOption
      key={option.id}
      as="li"
      value={option.name}
      disabled={disabled}
      className="group flex cursor-default items-center justify-between gap-12 bg-transparent px-5 py-2 data-[focus]:bg-brand-500"
    >
      <OptionContent option={option} count={option.count} />
      <span className="mb-px [.group:not([data-selected])_&]:hidden">
        <Icon component={Check} size={20} />
      </span>
    </HeadlessUIListboxOption>
  )
}
