"use client";

import {
  AutterErrorBoundary,
  initAutterBrowser,
} from "@autter/runtime-next/client";

initAutterBrowser({
  endpoint: "/api/autter-runtime",
  service: "autter-demo-nextjs-saas",
  environment: process.env.NODE_ENV,
  release: process.env.NEXT_PUBLIC_GIT_SHA,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <AutterErrorBoundary>{children}</AutterErrorBoundary>;
}
