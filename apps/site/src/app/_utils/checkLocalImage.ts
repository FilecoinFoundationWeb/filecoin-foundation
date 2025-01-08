import fs from 'fs'
import path from 'path'

export function checkLocalAsset(relativePath: string) {
  const publicPath = path.join(process.cwd(), 'public', relativePath)
  const stats = fs.statSync(publicPath)
  return stats.isFile()
}
