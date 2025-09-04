These examples should be used as guidance when configuring Sentry functionality within a project.

# Exception Catching

Use `Sentry.captureException(error)` to capture an exception and log the error in Sentry.
Use this in try catch blocks or areas where exceptions are expected

# Tracing Examples

Spans should be created for meaningful actions within an applications like button clicks, API calls, and function calls
Use the `Sentry.startSpan` function to create a span
Child spans can exist within a parent span

## Custom Span instrumentation in component actions

The `name` and `op` properties should be meaningful for the activities in the call.
Attach attributes based on relevant information and metrics from the request

```javascript
function TestComponent() {
  const handleTestButtonClick = () => {
    // Create a transaction/span to measure performance
    Sentry.startSpan(
      {
        op: "ui.click",
        name: "Test Button Click",
      },
      (span) => {
        const value = "some config"
        const metric = "some metric"

        // Metrics can be added to the span
        span.setAttribute("config", value)
        span.setAttribute("metric", metric)

        doSomething()
      },
    )
  }

  return (
    <button type="button" onClick={handleTestButtonClick}>
      Test Sentry
    </button>
  )
}
```

# Configuration

In NextJS the client side Sentry initialization is in `instrumentation-client.ts`, the server initialization is in `sentry.edge.config.ts` and the edge initialization is in `sentry.server.config.ts`
Initialization does not need to be repeated in other files, it only needs to happen the files mentioned above. You should use `import * as Sentry from "@sentry/nextjs"` to reference Sentry functionality

## Baseline

```javascript
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://b0fca72bf5a1ced57609a4826fc5b06d@o4507369657991168.ingest.us.sentry.io/4509864701919232",

  _experiments: {
    enableLogs: true,
  },
})
```
