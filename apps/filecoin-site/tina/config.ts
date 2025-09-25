import { defineConfig } from 'tinacms'

import { PATHS } from '@/constants/paths'

import { blogFields } from './schema/blog'

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || '',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: PATHS.BLOG.entriesPath,
        format: 'md',
        fields: blogFields('post'),
      },
    ],
  },
})
