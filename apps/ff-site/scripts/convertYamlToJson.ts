import path from 'path'
import { fileURLToPath } from 'url'

import { convertYamlToJson } from '@filecoin-foundation/utils/convertYamlToJson'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

convertYamlToJson(
  path.join(__dirname, '../public/admin/config.yml'),
  path.join(__dirname, '../src/app/_data/cmsConfigSchema.json'),
)
