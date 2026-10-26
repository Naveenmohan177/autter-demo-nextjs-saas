import { describe, expect, test } from "vitest";
import { z } from "zod";

// Guards the zod major-version bump (3 -> 4). Zod 4 changed the default
// invalid-input message to the "Invalid input: ..." form, so this test fails
// on zod 3 and passes on zod 4.
describe("zod v4", () => {
  test("uses v4 standard invalid-input messages", () => {
    const result = z.string().safeParse(123);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/^Invalid input:/);
    }
  });
});
