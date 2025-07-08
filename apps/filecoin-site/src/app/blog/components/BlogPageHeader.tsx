import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { Description } from '@/components/PageHeader/Description'
import { Title } from '@/components/PageHeader/Title'

import { Badge } from './Badge'

type PageHeaderProps = {
  title: string
  description: string
  children: React.ReactNode
  tag: string
  backgroundImage?: StaticImageData
}

export function BlogPageHeader({
  title,
  description,
  tag,
  backgroundImage,
  children,
}: PageHeaderProps) {
  const backgroundVariant = backgroundImage ? 'dark' : 'light'

  return (
    <header className="relative flex flex-col items-start gap-10 px-32 py-44">
      {backgroundImage && (
        <>
          <Image
            fill
            src={backgroundImage}
            className="-z-20 object-cover"
            alt=""
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
        </>
      )}
      <div className="flex max-w-2xl flex-col gap-6">
        <Badge backgroundVariant={backgroundVariant}>{tag}</Badge>
        <Title backgroundVariant={backgroundVariant}>{title}</Title>
        <Description backgroundVariant={backgroundVariant}>
          {description}
        </Description>
      </div>
      {children}
    </header>
  )
}
