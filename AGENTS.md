<!-- autter-runtime:begin -->
## Autter Runtime instrumentation

This Next.js app reports server errors, traces, memory and usage metrics, API
request summaries, and browser errors through Autter Runtime. Keep new code at
the same coverage as the code instrumented during setup.

- **Server initialization:** keep the single `registerAutter` call in
  `instrumentation.ts`. Use `AUTTER_RUNTIME_KEY` from the environment and set
  `GIT_SHA` to the full deployed commit SHA.
- **Requests:** wrap each new App Router API method with
  `withRuntimeRequest` from `@autter/runtime-next/server`, except the
  `/api/autter-runtime` relay. Preserve existing response and error behavior.
  Pages, server actions, and non-route handlers are not covered by request
  summaries.
- **Errors and logs:** let errors reach an instrumented boundary or capture
  handled exceptions with `captureServerException`. Use `runtimeLogger` for
  useful diagnostic messages; use `captureServerMessage` only for intentional
  issue-producing messages. Avoid duplicate captures for errors already
  recorded by an operation or request boundary.
- **Operations:** wrap meaningful customer workflows and background work with
  `withRuntimeOperation`, stable names, measured steps, and bounded,
  non-sensitive context. Declare failed, degraded, cancelled, or pending
  outcomes when a normal return is not success. Do not add a second process
  span around the same operation.
- **Browser capture:** keep `initAutterBrowser` and `AutterErrorBoundary` in
  the root client providers. Browser telemetry must use the same-origin
  `/api/autter-runtime` relay; keep the server key out of client code. Label
  important workflow controls with fixed, non-sensitive
  `data-autter-action` values. Keep any future CSP `connect-src` policy
  compatible with the same-origin relay without weakening other directives.
- **Privacy and delivery:** never include credentials, PII, request bodies, or
  secrets in telemetry context. Preserve the existing Runtime lifecycle and
  Next.js log flushing; await delivery for short-lived work where needed.
<!-- autter-runtime:end -->
