"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { parseCountTarget, formatCount } from "./countUp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Anima de 0 -> valor real (que YA está en el textContent). Bajo reduced-motion no anima.
export function useCountUp(scopeRef: React.RefObject<HTMLElement | null>) {
  const reduced = useRef(false);
  useGSAP(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = scopeRef.current?.querySelectorAll<HTMLElement>("[data-count]");
    nodes?.forEach((node) => {
      const target = parseCountTarget(node.textContent ?? "");
      if (!target || reduced.current) return; // sin número o reduced-motion: dejar el valor real
      const obj = { n: 0 };
      gsap.to(obj, {
        n: target.value, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: node, start: "top 85%", once: true },
        onUpdate: () => { node.textContent = formatCount(target.prefix, obj.n, target.decimals, target.suffix); },
        onComplete: () => { node.textContent = formatCount(target.prefix, target.value, target.decimals, target.suffix); },
      });
    });
  }, { scope: scopeRef });
}
