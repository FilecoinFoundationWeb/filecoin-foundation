import Image from 'next/image'

import type { StaticImageProps } from '@/types/sharedProps/imageType'

export function NextStaticImage({
  data,
  alt,
  placeholder = 'blur',
  ...rest
}: StaticImageProps) {
  return <Image src={data} alt={alt} placeholder={placeholder} {...rest} />
}
