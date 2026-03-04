import { LineVerticalIcon } from '@phosphor-icons/react'

import { Icon } from '../Icon'

export function PaginationDelimiter() {
  return (
    <div className="pagination-delimiter flex items-center">
      <Icon component={LineVerticalIcon} weight="light" />
    </div>
  )
}
