"use client";
import { useEffect, useState } from "react";

export function pickActiveId(entries: IntersectionObserverEntry[], prev: string | null): string | null {
  let next = prev;
  for (const e of entries) if (e.isIntersecting) next = (e.target as HTMLElement).id;
  return next;
}

export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => setActive((prev) => pickActiveId(entries, prev)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
    return () => spy.disconnect();
  }, [ids]);
  return active;
}
