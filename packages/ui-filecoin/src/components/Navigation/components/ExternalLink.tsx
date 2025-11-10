import type { ComponentProps } from 'react'

import { ArrowUpRightIcon } from '@phosphor-icons/react'

import { Icon } from '../../Icon'
import type { LinkItemProps } from '../types'

import { LinkDescription } from './LinkDescription'
import { LinkLabel } from './LinkLabel'

type ExternalLinkProps = ComponentProps<'a'> & LinkItemProps

export function ExternalLink({
  label,
  description,
  ...rest
}: ExternalLinkProps) {
  return (
    <a {...rest} rel="noopener noreferrer" target="_blank">
      <div className="group inline-flex items-center gap-1">
        <LinkLabel>{label}</LinkLabel>
        <span className="navigation-menu-link-external-icon">
          <Icon component={ArrowUpRightIcon} size={20} />
        </span>
      </div>
      {description && (
        <div className="mt-1">
          <LinkDescription>{description}</LinkDescription>
        </div>
      )}
    </a>
  )
}
