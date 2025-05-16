import fs from 'fs'
import path from 'path'

import { PATHS } from '@/constants/paths'

import { siteMetadataList } from '@/site-audit-reports/data/siteMetadataList'

const publicDir = path.join(process.cwd(), 'public')

export async function getSiteAuditReportsData() {
  return Promise.all(
    siteMetadataList.map(async ({ id }) => {
      const indexPath = path.join(
        publicDir,
        PATHS.SITE_AUDIT_REPORTS.path,
        id,
        'index.html',
      )

      let updatedOn: Date
      try {
        const stats = await fs.promises.stat(indexPath)
        updatedOn = stats.mtime
      } catch {
        updatedOn = new Date()
      }

      return {
        slug: id,
        updatedOn,
      }
    }),
  )
}
