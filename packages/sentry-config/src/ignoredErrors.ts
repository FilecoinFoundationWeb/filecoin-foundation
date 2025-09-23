export const ignoredClientErrors = [
  /uncaught exception in worker/i,
  /hydration failed/i,
  /^TypeError:/,
  /^ReferenceError:/,
  /^SyntaxError:/,
  /^NotFoundError:/,
] satisfies Array<RegExp | string>

export const ignoredServerErrors = []
