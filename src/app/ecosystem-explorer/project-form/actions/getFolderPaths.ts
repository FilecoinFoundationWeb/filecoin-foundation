'use server'

import { z } from 'zod'

import configJson from '@/data/cmsConfigSchema.json'

const pathConfigSchema = z.object({
  media_folder: z.string(),
  public_folder: z.string(),
})

export async function getFolderPaths() {
  const { media_folder, public_folder } = pathConfigSchema.parse(configJson)

  return {
    publicAssetsFolder: media_folder, // public/assets/images
    assetsFolder: public_folder, // assets/images
  } as const
}
