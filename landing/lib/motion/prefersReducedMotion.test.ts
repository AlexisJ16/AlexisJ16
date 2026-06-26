import { describe, it, expect } from "vitest";
import { shouldEnableSmoothScroll } from "./prefersReducedMotion";

describe("shouldEnableSmoothScroll", () => {
  it("desactiva con reduced-motion", () => {
    expect(shouldEnableSmoothScroll({ matches: true })).toBe(false);
  });
  it("activa sin reduced-motion", () => {
    expect(shouldEnableSmoothScroll({ matches: false })).toBe(true);
  });
  it("desactiva si no hay matchMedia (entorno sin window)", () => {
    expect(shouldEnableSmoothScroll(null)).toBe(false);
  });
});
