import { defineConfig } from 'tinacms'

import { CONTENT_PATHS } from '@/constants/paths'

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
      mediaRoot: CONTENT_PATHS.UPLOADS,
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: CONTENT_PATHS.BLOG_POSTS,
        format: 'md',
        fields: blogFields('post'),
      },
    ],
  },
})
