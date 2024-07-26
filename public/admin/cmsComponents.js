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

// https://decapcms.org/docs/registering-events/
CMS.registerEventListener({
  name: 'preSave',
  handler: async ({ entry }) => {
    const newEmail = entry.get('data').get('email')

    if (!newEmail) {
      return
    }

    const response = await fetch('/api/encryption', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value: newEmail,
        operation: 'encrypt',
      }),
    })

    if (response.status !== 200) {
      throw new Error('Could not encrypt email')
    }

    const { result: encrypted } = await response.json()

    return entry.get('data').set('email', encrypted)
  },
})

// https://decapcms.org/docs/custom-widgets/
const DecryptedEmailWidget = createClass({
  getInitialState() {
    return { data: undefined, error: null, loading: true }
  },

  componentDidMount() {
    const existingValue = this.props.value

    if (typeof existingValue !== 'undefined') {
      return this.decryptEmail(existingValue)
    }

    this.setState({ loading: false, error: null, data: '' })
  },

  handleChange: function (e) {
    const newValue = e.target.value
    this.props.onChange(newValue)
    this.setState({ ...this.state, data: newValue })
  },

  async decryptEmail(encryptedEmail) {
    try {
      const response = await fetch('/api/encryption', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          value: encryptedEmail,
          operation: 'decrypt',
        }),
      })

      if (response.status !== 200) {
        return this.setState({
          data: undefined,
          error: 'Could not decrypt email',
          loading: false,
        })
      }

      const { result: decrypted } = await response.json()
      this.setState({
        data: decrypted,
        error: null,
        loading: false,
      })
    } catch (error) {
      this.setState({
        data: undefined,
        error: 'Could not decrypt email',
        loading: false,
      })
    }
  },

  render: function () {
    const { data, error, loading } = this.state

    if (error) {
      return h('div', {}, error)
    }

    if (loading) {
      return h('div', {}, 'Loading...')
    }

    return h('input', {
      ...this.props,
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'email',
      value: data,
      onChange: this.handleChange,
    })
  },
})

const DecryptedEmailPreview = createClass({
  render: function () {
    return h('span', {}, '')
  },
})

CMS.registerWidget(
  'decrypted_email',
  DecryptedEmailWidget,
  DecryptedEmailPreview,
)
