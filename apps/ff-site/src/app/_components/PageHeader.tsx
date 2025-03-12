import {
  PageHeader as SharedPageHeader,
  type PageHeaderProps as SharedPageHeaderProps,
} from '@filecoin-foundation/ui/PageHeader'

import { SectionDivider } from '@/components/SectionDivider'

type PageHeaderProps = SharedPageHeaderProps & {
  sectionDividerText?: string
}

export function PageHeader({ sectionDividerText, ...props }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {sectionDividerText && <SectionDivider title={sectionDividerText} />}
      <SharedPageHeader {...props} />
    </div>
  )
}

PageHeader.Title = SharedPageHeader.Title
PageHeader.Image = SharedPageHeader.Image
