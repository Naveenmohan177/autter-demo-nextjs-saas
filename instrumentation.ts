export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { registerAutter } = await import("@autter/runtime-next/server");
    registerAutter({
      apiKey: process.env.AUTTER_RUNTIME_KEY!,
      service: "autter-demo-nextjs-saas",
      environment: process.env.NODE_ENV ?? "production",
      release: process.env.GIT_SHA ?? process.env.NEXT_PUBLIC_GIT_SHA,
      retainTracesAboveMs: 2000,
      logging: { console: false, minLevel: "info" },
    });
  }
}
