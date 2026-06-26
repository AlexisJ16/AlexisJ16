"use client";
import { useEffect } from "react";
import { useReveal } from "@/lib/hooks/useReveal";

export function RevealProvider() {
  useReveal();
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        document.querySelectorAll("animateMotion").forEach((m) => m.parentNode?.removeChild(m));
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return null;
}
