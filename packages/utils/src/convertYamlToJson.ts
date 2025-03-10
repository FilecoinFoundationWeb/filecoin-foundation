import fs from 'fs'
import yaml from 'js-yaml'

export function convertYamlToJson(
  sourcePath: string,
  targetPath: string,
): void {
  const yamlContent = fs.readFileSync(sourcePath, 'utf8')
  const jsonData = yaml.load(yamlContent)

  fs.writeFileSync(targetPath, JSON.stringify(jsonData, null, 2), 'utf8')
}
