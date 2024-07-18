const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const {
  pascalCase,
  snakeCase,
  startCase,
  camelCase,
  generateFile,
  createDir,
  writeFile,
} = require('./generateMarkdownToDataHelpers.js')

const CONFIG_FILE_PATH = path.resolve(__dirname, '../public/admin/config.yml')
const CMS_CONFIG_SCHEMA_PATH = path.resolve(
  __dirname,
  '../src/app/_data/cmsConfigSchema.json',
)

const TEMPLATE_PATHS = {
  getData: path.resolve(
    __dirname,
    '../templates/generateMarkdownToData/getData.ts',
  ),
  mapMarkdownToData: path.resolve(
    __dirname,
    '../templates/generateMarkdownToData/mapMarkdownToData.ts',
  ),
  types: path.resolve(
    __dirname,
    '../templates/generateMarkdownToData/types.ts',
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
  mapMarkdownToDataOutput: path.join(__dirname, '../src/app/_utils'),
  typesOutput: path.join(__dirname, '../src/app/_types'),
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

generateFile(
  TEMPLATE_PATHS.types,
  path.join(OUTPUT_DIRS.typesOutput, `${snakeCase(collectionName)}Types.ts`),
  collectionName,
)

const generateMapToMarkdowndAndTypesFiles = async (collectionName) => {
  const pascalName = pascalCase(collectionName)
  const camelName = camelCase(collectionName)

  const outputDir = path.join(__dirname, '../src/app/_utils')
  createDir(outputDir)

  // Generate the mapping file
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

  // Update cmsConfigSchema.json
  const cmsConfigSchema = JSON.parse(
    fs.readFileSync(CMS_CONFIG_SCHEMA_PATH, 'utf8'),
  )
  const existingCollectionIndex = cmsConfigSchema.collections.findIndex(
    (collection) => collection.name === collectionName,
  )

  const newCollection = {
    name: configCollection.name,
    label: configCollection.label,
    folder: configCollection.folder,
    label_singular: configCollection.label_singular,
    create: configCollection.create,
    extension: configCollection.extension,
    slug: configCollection.slug,
    fields: configCollection.fields.map((field) => {
      const baseField = {
        name: field.name,
        label: field.label,
        widget: field.widget,
      }
      if (field.required !== undefined) {
        baseField.required = field.required
      }
      if (field.hint) {
        baseField.hint = field.hint
      }
      if (field.options) {
        baseField.options = field.options
      }
      if (field.widget === 'object' && field.fields) {
        baseField.fields = field.fields
      }
      return baseField
    }),
  }

  if (existingCollectionIndex !== -1) {
    cmsConfigSchema.collections[existingCollectionIndex] = newCollection
  } else {
    cmsConfigSchema.collections.push(newCollection)
  }

  fs.writeFileSync(
    CMS_CONFIG_SCHEMA_PATH,
    JSON.stringify(cmsConfigSchema, null, 2),
  )
  console.log(`cmsConfigSchema.json updated successfully.`)
}

generateMapToMarkdowndAndTypesFiles(collectionName)
  .then(() =>
    console.log(`Constants and functions generated for ${collectionName}`),
  )
  .catch((err) =>
    console.error('Error generating constants and functions:', err),
  )
