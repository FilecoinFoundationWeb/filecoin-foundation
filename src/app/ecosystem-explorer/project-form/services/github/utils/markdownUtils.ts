import { AllowedImageFormats } from './fileUtils'

type GetMarkdownTemplateParams = {
  projectName: string
  imagePath: `${string}.${AllowedImageFormats}`
}

export function getMarkdownTemplate({
  projectName,
  imagePath,
}: GetMarkdownTemplateParams) {
  return `---
    title: ${projectName}
    image:
      src: ${imagePath}
  ---
`
}
