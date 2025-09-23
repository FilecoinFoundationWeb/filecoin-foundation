type IgnoredErrors = Array<RegExp | string>

export const ignoredClientErrors = [
  /uncaught exception in worker/i, // Noise from Cloudflare edge workers – not actionable
  /hydration failed/i, // Next.js hydration mismatch during client reloads – not actionable
  /^TypeError:/,
  /^ReferenceError:/,
  /^SyntaxError:/,
  /^NotFoundError:/,
] satisfies IgnoredErrors
