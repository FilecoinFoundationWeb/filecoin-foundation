import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const leaderboardPageItem = qino.defineItem({
  file: '/pages/security/bug-bounty/leaderboard.md',
  schema: PageFrontmatterSchema,
})
