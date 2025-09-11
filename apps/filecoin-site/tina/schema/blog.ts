import type { TinaField } from 'tinacms'

export function blogFields(collection = 'post'): Array<TinaField> {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'Draft',
      description: 'If this is checked the post will not be published',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Blog Content',
      description: 'This is the markdown body',
      isBody: true,
      required: true,
      templates: [
        {
          name: 'youtube',
          label: 'YouTube',
          match: {
            start: '{{<',
            end: '>}}',
          },
          fields: [
            {
              name: 'id',
              label: 'ID',
              type: 'string',
              required: true,
              description:
                'This is approximately 10 numbers & letters in the YouTube URL',
            },
            {
              name: 'title',
              label: 'Title',
              description: 'The title of the video (optional)',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      description:
        'A ~160 char summary of the post, this is used for the social metadata',
      required: true,
    },
    {
      type: 'image',
      name: 'share_image',
      label: 'Social Image',
      required: false,
    },
    {
      type: 'object',
      name: 'image',
      label: 'Header Image',
      required: false,
      fields: [
        {
          type: 'image',
          name: 'url',
          label: 'url',
        },
        {
          type: 'string',
          name: 'alt',
          label: 'alt',
        },
      ],
    },
    {
      type: 'string',
      name: 'author',
      label: 'Author',
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date',
      required: true,
      ui: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
    {
      type: 'string',
      name: 'categories',
      label: 'Categories',
      options: ['updates', 'interviews', 'awards', 'events'],
      list: true,
      required: true,
    },
    {
      type: 'boolean',
      name: 'main_feature_inverted',
      label: 'Main Feature - Inverted Mode',
    },
    {
      type: 'boolean',
      name: 'double_column_mode',
      label: 'Double Column Mode',
    },
    {
      type: 'boolean',
      name: 'double_column_inverted',
      label: 'Double Column - Inverted Mode',
    },
    {
      type: 'boolean',
      name: 'dim_image',
      label: 'Dim image',
    },
    {
      name: 'related_article_1',
      label: 'Related Article 1',
      type: 'reference',
      collections: [collection],
    },
    {
      name: 'related_article_2',
      label: 'Related Article 2',
      type: 'reference',
      collections: [collection],
    },
    {
      name: 'related_article_3',
      label: 'Related Article 3',
      type: 'reference',
      collections: [collection],
    },
    {
      type: 'string',
      name: 'aliases',
      label: 'Alias',
      description: 'Any alternative urls that should redirect to this post',
      list: true,
    },
  ]
}
export function blogIndexFields(collection = 'post') {
  return [
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true,
    },
    {
      type: 'string',
      name: 'title',
      label: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'description',
      required: true,
    },
    {
      type: 'image',
      name: 'share_image',
      label: 'share_image',
      required: false,
    },
    {
      type: 'string',
      name: 'main_feature_small_header',
      label: 'Main Article Header',
      required: true,
    },
    {
      name: 'main_feature',
      label: 'Main Article',
      required: true,
      type: 'reference',
      collections: [collection],
    },
    {
      type: 'string',
      name: 'main_feature_cta',
      label: 'Main Article CTA',
      required: true,
    },
    {
      type: 'string',
      name: 'features',
      label: 'Featured Articles',
      list: true,
    },
    {
      type: 'string',
      name: 'view_article_cta',
      label: 'View Article CTA',
    },
    {
      type: 'string',
      name: 'categories_labels',
      label: 'Categories Labels',
      list: true,
    },
    {
      type: 'string',
      name: 'categories_values',
      label: 'Categories Values',
      list: true,
    },
    {
      type: 'string',
      name: 'rss_cta',
      label: 'RSS CTA',
    },
    {
      type: 'string',
      name: 'related_articles_label',
      label: 'Related Articles Label',
    },
    {
      type: 'string',
      name: 'view_all_label',
      label: 'View All Label',
    },
  ]
}
