import { describe, it, expect } from "vitest";
import { activeStepFromProgress } from "./processProgress";

describe("activeStepFromProgress", () => {
  it("inicio -> primer paso", () => { expect(activeStepFromProgress(0, 5)).toBe(0); });
  it("mitad -> paso central", () => { expect(activeStepFromProgress(0.5, 5)).toBe(2); });
  it("final -> último paso (no se desborda)", () => { expect(activeStepFromProgress(1, 5)).toBe(4); });
  it("clampa por debajo de 0", () => { expect(activeStepFromProgress(-0.3, 5)).toBe(0); });
  it("0.99 sigue dentro del último", () => { expect(activeStepFromProgress(0.99, 5)).toBe(4); });
  it("count<=0 -> -1", () => { expect(activeStepFromProgress(0.5, 0)).toBe(-1); });
});
