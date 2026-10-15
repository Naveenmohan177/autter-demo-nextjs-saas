import { NextResponse } from "next/server";
import { withRuntimeRequest } from "@autter/runtime-next/server";
import { getProjectForUser } from "../../../../src/projects";

export const GET = withRuntimeRequest(async (
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const project = getProjectForUser({ orgId: "org_a" }, (await params).id);
    if (!project)
      return NextResponse.json({ error: "not found" }, { status: 404 });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: String(error), stack: (error as Error).stack },
      { status: 500 },
    );
  }
}, { name: "projects.get" });
