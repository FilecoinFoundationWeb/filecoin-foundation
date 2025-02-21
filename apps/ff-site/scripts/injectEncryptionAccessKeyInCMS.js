const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

const environmentIsVercel = process.env.VERCEL

if (!environmentIsVercel) {
  console.log(
    'Skipping injection of environment variables in the CMS when not running on Vercel',
  )
  process.exit(0)
}

const API_KEY = process.env.ENCRYPTION_ENDPOINT_ACCESS_KEY
const API_KEY_PLACEHOLDER = '%ENCRYPTION_ENDPOINT_ACCESS_KEY%'

if (!API_KEY) {
  throw new Error('ENCRYPTION_ENDPOINT_ACCESS_KEY is not set')
}

const cmsEncryptionModule = path.join(
  process.cwd(),
  'public',
  'admin',
  'cmsEncryptionWidget.js',
)

const originalFileContent = fs.readFileSync(cmsEncryptionModule, 'utf8')

const fileContentWithAccessKey = originalFileContent.replace(
  API_KEY_PLACEHOLDER,
  API_KEY,
)

fs.writeFileSync(cmsEncryptionModule, fileContentWithAccessKey, 'utf8')

console.log('Environment variables successfully injected in the CMS!')
