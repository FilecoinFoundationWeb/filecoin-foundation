async function encryption(value, operation) {
  const response = await fetch('/api/encryption', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value, operation }),
  })

  if (response.status !== 200) {
    throw new Error(`Could not perform operation on value: ${value} `)
  }

  const { result } = await response.json()
  return result
}

function getMethods(o) {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(o)).filter(
    (m) => 'function' === typeof o[m],
  )
}

// https://decapcms.org/docs/registering-events/
CMS.registerEventListener({
  name: 'preSave',
  handler: async ({ entry }) => {
    console.log(entry.get('data').get('email'))

    return

    // const { entry } = args
    const newEmail = entry.get('data').get('email')

    if (!newEmail) {
      return
    }

    const encrypted = await encryption(newEmail, 'encrypt')

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
