const fs = require('fs')
const path = require('path')

const matter = require('gray-matter')
const Joi = require('joi')

const markdownSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  seo: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
})

const validateMarkdownFiles = (dir) => {
  const items = fs.readdirSync(dir)

  items.forEach((item) => {
    const fullPath = path.join(dir, item)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      validateMarkdownFiles(fullPath)
    } else if (stats.isFile() && fullPath.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(content)

      const { error } = markdownSchema.validate(data)
      if (error) {
        throw new Error(
          `Validation error in file ${fullPath}: ${error.message}`
        )
      }
    }
  })
}

validateMarkdownFiles('./src/content')
console.log('All Markdown files are valid.')
