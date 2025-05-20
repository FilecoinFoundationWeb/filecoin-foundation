import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'
import { Meta, type MetaDataType } from '@filecoin-foundation/ui/Meta'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'

import { PageHeaderImage, type PageHeaderImageProps } from './PageHeaderImage'
import { PageHeaderTitle, type PageHeaderTitleProps } from './PageHeaderTitle'

type PageHeaderDescriptionProps = {
  text: DescriptionProps['children']
  isClamped?: DescriptionProps['isClamped']
}

export type PageHeaderProps = {
  title: PageHeaderTitleProps['children']
  image?: PageHeaderImageProps
  isFeatured?: boolean
  metaData?: MetaDataType
  description?: PageHeaderDescriptionProps
  children?: React.ReactElement
}

export function PageHeader({
  title,
  image,
  metaData,
  isFeatured,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="grid grid-cols-1 gap-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {isFeatured && <TagLabel variant="secondary">Featured</TagLabel>}

          <PageHeaderTitle>{title}</PageHeaderTitle>

          {metaData && <Meta metaData={metaData} />}

          {description && (
            <DescriptionText isClamped={description.isClamped}>
              {description.text}
            </DescriptionText>
          )}

          {children}
        </div>

        {image && <PageHeaderImage {...image} />}
      </div>
    </header>
  )
}
