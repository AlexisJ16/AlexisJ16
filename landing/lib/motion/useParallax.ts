"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useParallax(targetRef: React.RefObject<HTMLElement | null>, distance = 40) {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = targetRef.current;
    if (!el) return;
    gsap.to(el, {
      y: distance, ease: "none",
      scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
    });
  }, { scope: targetRef });
}
