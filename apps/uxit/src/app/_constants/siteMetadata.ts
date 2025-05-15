import type { Metadata } from 'next'

const BASE_DOMAIN = 'uxit.fil.org'
const BASE_URL = `https://${BASE_DOMAIN}`

const ORGANIZATION_NAME = 'Filecoin Foundation – UXIT'

export const ROOT_METADATA = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
} satisfies Metadata

export { BASE_DOMAIN, BASE_URL, ORGANIZATION_NAME }
