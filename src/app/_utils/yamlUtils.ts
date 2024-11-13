import fs from 'fs'
import path from 'path'

import yaml from 'js-yaml'

type BaseYAMLData = {
  slug: string
}

export function readAndValidateYamlFiles<T extends BaseYAMLData>(
  directoryPath: string,
): Array<T> {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const slug = path.parse(filename).name
    const filePath = path.join(directory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const data = yaml.load(fileContent) as T

    if (slug !== data.slug) {
      throw new Error(
        `Mismatch! File: ${filename} has slug: ${data.slug}, expected: ${slug}`,
      )
    }

    return { ...data, slug }
  })
}
