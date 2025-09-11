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
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'md',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: blogFields('post'),
      },
    ],
  },
})
