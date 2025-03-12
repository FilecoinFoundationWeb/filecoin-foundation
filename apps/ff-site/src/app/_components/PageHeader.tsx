import {
  PageHeader as SharedPageHeader,
  type PageHeaderProps as SharedPageHeaderProps,
} from '@filecoin-foundation/ui/PageHeader'

import { SectionDivider } from '@/components/SectionDivider'

type PageHeaderProps = SharedPageHeaderProps & {
  sectionDividerTitle?: string
}

export function PageHeader({ sectionDividerTitle, ...props }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {sectionDividerTitle && <SectionDivider title={sectionDividerTitle} />}
      <SharedPageHeader {...props} />
    </div>
  )
}

PageHeader.Title = SharedPageHeader.Title
PageHeader.Image = SharedPageHeader.Image
