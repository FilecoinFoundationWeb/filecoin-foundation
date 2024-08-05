const EMAIL_CMS_FIELD = 'email'
const FULL_NAME_CMS_FIELD = 'full-name'

const EMPTY_CMS_VALUE = ''
const UNSET_CMS_VALUE = undefined

const ENCRYPTION_ENDPOINT = '/api/encryption'
let ENCRYPTION_PREFIX = ''

fetch(ENCRYPTION_ENDPOINT, { method: 'GET' })
  .then((response) => response.json())
  .then((config) => (ENCRYPTION_PREFIX = config.prefix))
  .catch((error) => {
    throw new Error(`Could not fetch encryption config: ${error}`)
  })

// Encryption fetcher functions
async function encryption(value, operation) {
  const response = await fetch(ENCRYPTION_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      value: value.trim(),
      operation,
    }),
  })

  if (response.status !== 200) {
    throw new Error(`Could not perform ${operation} operation value: ${value} `)
  }

  const { result } = await response.json()
  return result
}

function encrypt(value) {
  return encryption(value, 'encrypt')
}

function decrypt(value) {
  return encryption(value, 'decrypt')
}

// CMS Event Hooks: https://decapcms.org/docs/registering-events/
async function encryptValueIfNew(entry, fieldName) {
  const value = entry.get('data').get(fieldName)

  if (value === UNSET_CMS_VALUE) {
    return
  }

  if (value === EMPTY_CMS_VALUE) {
    return entry.get('data').set(fieldName, EMPTY_CMS_VALUE)
  }

  if (!ENCRYPTION_PREFIX) {
    throw new Error('Encryption prefix is not set')
  }

  const valueIsAlreadyEncrypted = value.startsWith(ENCRYPTION_PREFIX)

  if (valueIsAlreadyEncrypted) {
    return
  }

  const encrypted = await encrypt(value)
  return entry.get('data').set(fieldName, encrypted)
}

CMS.registerEventListener({
  name: 'preSave',
  handler: async ({ entry }) => encryptValueIfNew(entry, EMAIL_CMS_FIELD),
})

CMS.registerEventListener({
  name: 'preSave',
  handler: async ({ entry }) => encryptValueIfNew(entry, FULL_NAME_CMS_FIELD),
})

// CMS Custom Widgets: https://decapcms.org/docs/custom-widgets/
const DecryptedValueWidget = createClass({
  getInitialState() {
    return { loading: true, data: undefined, error: null }
  },

  componentDidMount() {
    const currentValue = this.props.value

    if (currentValue === UNSET_CMS_VALUE || currentValue === EMPTY_CMS_VALUE) {
      return this.setState({ loading: false, data: '', error: null })
    }

    decrypt(currentValue)
      .then((data) => {
        this.setState({ loading: false, data, error: null })
      })
      .catch((error) => {
        this.setState({ loading: false, data: undefined, error })
      })
  },

  handleChange: function (e) {
    const newValue = e.target.value
    const cleanNewValue = newValue.replace(ENCRYPTION_PREFIX, '')

    this.props.onChange(cleanNewValue)
    this.setState({ ...this.state, data: cleanNewValue })
  },

  render: function () {
    const { data, error, loading } = this.state
    console.log({ data, error, loading })

    if (loading) {
      return h('div', {}, 'Loading...')
    }

    if (error) {
      return h('div', {}, error)
    }

    return h('input', {
      ...this.props,
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: data,
      onChange: this.handleChange,
    })
  },
})

const DecryptedValuePreview = createClass({
  render: function () {
    return h('span', {}, '')
  },
})

CMS.registerWidget(
  'decrypted_widget',
  DecryptedValueWidget,
  DecryptedValuePreview,
)
