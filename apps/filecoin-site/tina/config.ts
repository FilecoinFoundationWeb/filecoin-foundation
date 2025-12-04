import { defineConfig } from 'tinacms'

import { blogFields } from './schema/blog'
import { ENTRIES_PATHS } from '@/constants/paths'

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
        path: ENTRIES_PATHS['/blog'],
        format: 'md',
        fields: blogFields('post'),
      },
    ],
  },
})
