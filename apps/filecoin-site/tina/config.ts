import { defineConfig } from 'tinacms'

import { blogFields } from './schema/blog'

export default defineConfig({
  branch: 'bp/filecoin-tina-cms',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'content/uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/blog/posts',
        format: 'md',
        fields: blogFields('post'),
      },
    ],
  },
})
