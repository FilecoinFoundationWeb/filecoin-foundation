import fs from 'fs'
import yaml from 'js-yaml'

type ConvertYamlToJsonParams = {
  sourcePath: string
  targetPath: string
}

export function convertYamlToJson({
  sourcePath,
  targetPath,
}: ConvertYamlToJsonParams) {
  const yamlContent = fs.readFileSync(sourcePath, 'utf8')
  const jsonData = yaml.load(yamlContent)

  fs.writeFileSync(targetPath, JSON.stringify(jsonData, null, 2), 'utf8')
}
