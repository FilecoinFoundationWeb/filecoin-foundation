const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const yamlPath = path.join(__dirname, '../public/admin/config.yml')
const jsonPath = path.join(__dirname, '../src/app/_data/cmsConfigSchema.json')

const yamlContent = fs.readFileSync(yamlPath, 'utf8')
const jsonData = yaml.load(yamlContent)

fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8')
