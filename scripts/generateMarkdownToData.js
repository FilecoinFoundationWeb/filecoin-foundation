const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const {
  pascalCase,
  camelCase,
  startCase,
  generateFile,
  createDir,
  writeFile,
} = require('./generateMarkdownToDataHelpers.js')

const CONFIG_FILE_PATH = path.resolve(__dirname, '../public/admin/config.yml')

const TEMPLATE_PATHS = {
  getData: path.resolve(
    __dirname,
    '../templates/generateMarkdownToData/getData.ts',
  ),
}

const collectionName = process.argv[2]
if (!collectionName) {
  console.error('Please provide a collection name')
  process.exit(1)
}

const config = yaml.load(fs.readFileSync(CONFIG_FILE_PATH, 'utf8'))
const configCollection = config.collections.find(
  (collection) => collection.name === collectionName,
)

if (!configCollection) {
  console.error('Config collection not found in config.yml, please provide.')
  process.exit(1)
}

const OUTPUT_DIRS = {
  getDataOutput: path.join(__dirname, '../src/app/_utils'),
}

Object.values(OUTPUT_DIRS).forEach(createDir)

generateFile(
  TEMPLATE_PATHS.getData,
  path.join(
    OUTPUT_DIRS.getDataOutput,
    `get${startCase(collectionName).replace(/ /g, '')}Data.ts`,
  ),
  collectionName,
)

const generateTypesAndMapMarkdownToDataFiles = async (collectionName) => {
  const configCollection = config.collections.find(
    (collection) => collection.name === collectionName,
  )

  if (!configCollection) {
    console.error(`Configuration for ${collectionName} not found in config.yml`)
    process.exit(1)
  }

  const pascalName = pascalCase(collectionName)
  const camelName = camelCase(collectionName)

  const outputDir = path.join(__dirname, '../src/app/_utils')
  createDir(outputDir)

  // Generate mapping file
  const fields = configCollection.fields
  const mappingFilePath = path.join(
    outputDir,
    `mapMarkdownTo${pascalName}Data.ts`,
  )
  const mappingContent = `
import { type ${pascalName}Data } from '@/types/${camelName}Types';

export function mapMarkdownTo${pascalName}Data({
  data,
  content,
}: {
  data: any;
  content?: string;
}): ${pascalName}Data {
  return {
    ${fields
      .map((field) => {
        const fieldName = camelCase(field.name)
        return field.name.includes('-') || field.name.includes('_')
          ? `${fieldName}: data['${field.name}'],`
          : `${fieldName}: data.${field.name},`
      })
      .join('\n    ')}
    content,
  };
}
`

  await writeFile(mappingFilePath, mappingContent)
  console.log(`Mapping file created successfully at ${mappingFilePath}.`)

  // Generate the type definition file
  const typeFilePath = path.join(
    OUTPUT_DIRS.typesOutput,
    `${camelName}Types.ts`,
  )
  const typeContent = `
import { type SeoMetadata } from '@/types/metadataTypes';
import { type ImageProps } from '@/types/sharedProps/imageType';

export type ${pascalName}Data = {
  ${fields
    .map((field) => {
      if (field.name === 'image') {
        return `image: ImageProps;`
      } else if (field.name === 'seo') {
        return `seo: SeoMetadata;`
      } else {
        return `${camelCase(field.name)}: ${field.widget === 'datetime' ? 'string' : field.widget === 'number' ? 'number' : 'string'};`
      }
    })
    .join('\n  ')}
}
`

  await writeFile(typeFilePath, typeContent)
  console.log(`Type definition file created successfully at ${typeFilePath}.`)
}

generateTypesAndMapMarkdownToDataFiles(collectionName)
  .then(() =>
    console.log(`Constants and functions generated for ${collectionName}`),
  )
  .catch((err) =>
    console.error('Error generating constants and functions:', err),
  )
