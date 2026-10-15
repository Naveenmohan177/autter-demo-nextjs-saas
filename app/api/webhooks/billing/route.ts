import { NextResponse } from "next/server";
import { withRuntimeRequest } from "@autter/runtime-next/server";

export const POST = withRuntimeRequest(async (req: Request) => {
  const payload = await req.json();
  return NextResponse.json({ received: true, event: payload.type });
}, { name: "webhooks.billing" });
