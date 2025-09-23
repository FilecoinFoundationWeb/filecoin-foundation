type IgnoredErrors = Array<RegExp | string>

export const ignoredClientErrors = [
  /uncaught exception in worker/i,
  /hydration failed/i,
  /^TypeError:/,
  /^ReferenceError:/,
  /^SyntaxError:/,
  /^NotFoundError:/,
] satisfies IgnoredErrors
