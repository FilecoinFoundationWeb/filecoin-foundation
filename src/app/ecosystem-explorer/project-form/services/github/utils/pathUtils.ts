import { z } from 'zod'

import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import configJson from '@/data/cmsConfigSchema.json'

const pathConfigSchema = z.object({
  media_folder: z.string(),
  public_folder: z.string(),
})

export function getFolderPaths() {
  const { media_folder, public_folder } = pathConfigSchema.parse(configJson)

  return {
    mediaFolder: media_folder,
    publicFolder: public_folder,
    ecosystemFolder: ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
  } as const
}
