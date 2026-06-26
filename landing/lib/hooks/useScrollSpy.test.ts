import { describe, it, expect } from "vitest";
import { pickActiveId } from "./useScrollSpy";

describe("pickActiveId", () => {
  it("devuelve el id de la última entrada intersectada", () => {
    const entries = [
      { target: { id: "trabajo" }, isIntersecting: true },
      { target: { id: "sobre-mi" }, isIntersecting: false },
    ] as unknown as IntersectionObserverEntry[];
    expect(pickActiveId(entries, "inicio")).toBe("trabajo");
  });
  it("conserva el id previo si nada intersecta", () => {
    const entries = [{ target: { id: "x" }, isIntersecting: false }] as unknown as IntersectionObserverEntry[];
    expect(pickActiveId(entries, "inicio")).toBe("inicio");
  });
});
