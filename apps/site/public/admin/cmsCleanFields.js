// This handler function uses Immutable.js, which is imported in index.html
// Immutable.js is used internally by Decap CMS to handle the data.
// The "entry" passed to the handler function is an Immutable.js Map object.
// Using Immutable.js to manipulate the data makes this handler function more robust and easier to understand.
// https://immutable-js.com/docs/v5.0.3/Map/

CMS.registerEventListener({
  name: 'preSave',
  handler: (params) => {
    const { entry } = params

    if (!entry || !entry.get('data')) {
      return
    }

    if (!Immutable) {
      console.error('Immutable.js is not loaded but is required')
      return entry.get('data')
    }

    const data = entry.get('data').toJS()
    const trimmedData = trimStrings(data)
    return Immutable.fromJS(trimmedData)
  },
})

function trimStrings(obj) {
  if (isString(obj)) {
    return obj.trim()
  }

  if (isArray(obj)) {
    return obj.map(trimStrings)
  }

  if (isObject(obj)) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = trimStrings(obj[key])
      return acc
    }, {})
  }

  return obj
}

function isString(value) {
  return typeof value == 'string'
}

function isObject(value) {
  return (
    value !== null &&
    typeof value == 'object' &&
    value.constructor.name === 'Object'
  )
}

function isArray(value) {
  return Array.isArray(value)
}
