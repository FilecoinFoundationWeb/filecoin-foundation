module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce Array<T> in union types',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      TSUnionType(node) {
        node.types.forEach((type) => {
          if (type.type === 'TSArrayType') {
            context.report({
              node: type,
              message: 'Use Array<T> instead of T[] in union types',
              fix(fixer) {
                const sourceCode = context.getSourceCode()
                const elementType = sourceCode.getText(type.elementType)
                return fixer.replaceText(type, `Array<${elementType}>`)
              },
            })
          }
        })
      },
      TSArrayType(node) {
        context.report({
          node,
          message: 'Use Array<T> instead of T[]',
          fix(fixer) {
            const sourceCode = context.getSourceCode()
            const elementType = sourceCode.getText(node.elementType)
            return fixer.replaceText(node, `Array<${elementType}>`)
          },
        })
      },
    }
  },
}
