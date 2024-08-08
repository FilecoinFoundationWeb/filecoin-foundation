const regExp =
  /^<figure>\s*<iframe src="(.*?)"[^>]*><\/iframe>\s*<figcaption>(.*)<\/figcaption>\s*<\/figure>$/ms

function getMatches(match) {
  return {
    src: match[1],
    title: match[2],
    caption: match[3],
  }
}

function renderCaption(caption) {
  if (caption.link !== undefined) {
    return `<figcaption><a href="${caption.link}" target="_blank" title="${caption.title}">${caption.title}</a></figcaption>`
  }
  return `<figcaption>${caption.title}</figcaption>`
}

function renderVideoIframe(src, title = 'Video Player') {
  return `<iframe
    src="${src}"
    title="${title}"
    height="315"
    width="560"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    allowfullscreen>
  </iframe>`
}

function renderVideoComponent(data) {
  const { src, title, caption = { title: '', link: '' } } = data

  if (!src) {
    return ''
  }

  if (caption.title === '') {
    return renderVideoIframe(src, title)
  } else {
    return `<figure>
      ${renderVideoIframe(src, title)}
      ${renderCaption(caption)}
    </figure>`
  }
}

function renderAudioIframe(src, title = 'Audio Player') {
  return `<iframe
    src="${src}"
    title="${title}"
    height="166"
    width="100%"
    frameborder="0"
    scrolling="no"
    allow="autoplay">
  </iframe>`
}

function renderAudioComponent(data) {
  const { src, title, caption = { title: '', link: '' } } = data

  if (!src) {
    return ''
  }

  if (caption.title === '') {
    return renderAudioIframe(src, title)
  } else {
    return `<figure>
      ${renderAudioIframe(src, title)}
      ${renderCaption(caption)}
    </figure>`
  }
}

CMS.registerEditorComponent({
  id: 'video',
  label: 'Video Player',
  fields: [
    {
      name: 'src',
      label: 'Embedded Video URL',
      widget: 'string',
      required: true,
    },
    {
      name: 'title',
      label: 'Video Title',
      hint: 'Include title for screen readers',
      widget: 'string',
      required: true,
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'object',
      fields: [
        {
          name: 'title',
          label: 'Caption Title',
          widget: 'string',
          required: true,
        },
        {
          name: 'link',
          label: 'Caption Link',
          widget: 'string',
          required: false,
        },
      ],
      required: false,
    },
  ],
  pattern: regExp,
  fromBlock: getMatches,
  toBlock: renderVideoComponent,
  toPreview: renderVideoComponent,
})

CMS.registerEditorComponent({
  id: 'audio',
  label: 'Audio Player',
  fields: [
    {
      name: 'src',
      label: 'Embedded Audio URL',
      widget: 'string',
      required: true,
    },
    {
      name: 'title',
      label: 'Audio Title',
      hint: 'Include title for screen readers',
      widget: 'string',
      required: true,
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'object',
      fields: [
        {
          name: 'title',
          label: 'Caption Title',
          widget: 'string',
          required: true,
        },
        {
          name: 'link',
          label: 'Caption Link',
          widget: 'string',
          required: false,
        },
      ],
      required: false,
    },
  ],
  pattern: regExp,
  fromBlock: getMatches,
  toBlock: renderAudioComponent,
  toPreview: renderAudioComponent,
})
