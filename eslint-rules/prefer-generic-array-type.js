module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer Array<T> over T[]',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      TSArrayType(node) {
        const sourceCode = context.getSourceCode()
        const elementType = sourceCode.getText(node.elementType)

        context.report({
          node,
          message: `Use Array<${elementType}> instead of ${elementType}[]`,
          fix(fixer) {
            return fixer.replaceText(node, `Array<${elementType}>`)
          },
        })
      },
    }
  },
}
