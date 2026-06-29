"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useDrawOn(scopeRef: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // estado final estático
    const paths = scopeRef.current?.querySelectorAll<SVGGeometryElement>("[data-draw]");
    paths?.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(p, {
        strokeDashoffset: 0, duration: 1.1, ease: "power1.inOut",
        scrollTrigger: { trigger: p, start: "top 85%", once: true },
      });
    });
  }, { scope: scopeRef });
}
