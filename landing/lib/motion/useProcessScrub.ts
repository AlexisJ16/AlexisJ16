"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { activeStepFromProgress } from "./processProgress";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Sticky-rail + iluminación de pasos ligada al progreso de scroll. reduced-motion: early-return (lista estática).
export function useProcessScrub(scopeRef: React.RefObject<HTMLElement | null>, stepCount: number) {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = scopeRef.current;
    if (!root) return;
    const fill = root.querySelector<HTMLElement>("[data-rail-fill]");
    const steps = root.querySelectorAll<HTMLElement>("[data-step]");
    ScrollTrigger.create({
      trigger: root,
      start: "top 60%",
      end: "bottom 75%",
      scrub: true,
      onUpdate: (self) => {
        if (fill) fill.style.transform = `scaleY(${self.progress})`;
        const active = activeStepFromProgress(self.progress, stepCount);
        steps.forEach((s, i) => s.classList.toggle("is-active", i <= active));
      },
    });
    ScrollTrigger.refresh(); // altura cambia por el sticky
  }, { scope: scopeRef });
}
