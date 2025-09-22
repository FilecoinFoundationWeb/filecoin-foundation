import { defineConfig } from 'tinacms'

import { blogFields } from './schema/blog'

export default defineConfig({
  branch: 'main',
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
        match: {
          include: '**/*.md',
        },
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: blogFields('post'),
      },
    ],
  },
})
