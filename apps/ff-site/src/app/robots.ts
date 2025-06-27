import { generateRobotsTxt } from '@filecoin-foundation/utils/generateRobotsTxt'

import { BASE_URL } from '@/constants/siteMetadata'

export default function robots() {
  return generateRobotsTxt({ baseUrl: BASE_URL })
}
