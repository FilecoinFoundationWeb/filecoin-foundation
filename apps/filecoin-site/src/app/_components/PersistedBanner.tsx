import { cookies } from 'next/headers'

import { hash } from 'ohash'

import { Banner, type BannerProps } from './Banner'

type PersistedBannerProps = Pick<BannerProps, 'text'>

export async function PersistedBanner({ text }: PersistedBannerProps) {
  const cookieName = `banner-visibility-${hash(text)}`

  const cookieStore = await cookies()
  const cookieValue = cookieStore.get(cookieName)?.value

  if (cookieValue === 'false') {
    return null
  }

  return <Banner text={text} cookieName={cookieName} />
}
