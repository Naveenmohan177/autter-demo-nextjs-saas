import { createAutterRelayRoute } from "@autter/runtime-next/server";

export const { POST } = createAutterRelayRoute({
  apiKey: process.env.AUTTER_RUNTIME_KEY!,
});
