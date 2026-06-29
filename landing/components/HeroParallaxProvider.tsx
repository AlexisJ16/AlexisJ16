"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Parallax sutil de la señal del hero (M1b).
 * Componente nulo (no renderiza DOM) que anima .hsig__body por selector,
 * manteniendo Hero como Server Component — evita la race condition de hidratación
 * que impediría que RevealProvider elimine los <animateMotion> bajo reduced-motion.
 */
export function HeroParallaxProvider() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = document.querySelector<HTMLElement>(".hsig__body");
    if (!el) return;
    gsap.to(el, {
      y: 36,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
    });
  });
  return null;
}
