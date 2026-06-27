import { describe, it, expect } from "vitest";
import { parseCountTarget, formatCount } from "./countUp";

describe("parseCountTarget", () => {
  it("entero simple", () => {
    expect(parseCountTarget("546")).toEqual({ prefix: "", value: 546, decimals: 0, suffix: "" });
  });
  it("porcentaje con prefijo ≥", () => {
    expect(parseCountTarget("≥95%")).toEqual({ prefix: "≥", value: 95, decimals: 0, suffix: "%" });
  });
  it("devuelve null si no hay número", () => {
    expect(parseCountTarget("pgvector")).toBeNull();
  });
});

describe("formatCount", () => {
  it("rearma con prefijo y sufijo", () => {
    expect(formatCount("≥", 95, 0, "%")).toBe("≥95%");
  });
  it("respeta decimales", () => {
    expect(formatCount("", 98.5, 1, "%")).toBe("98.5%");
  });
});
