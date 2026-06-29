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
      // Si el trazo tiene la animación CSS idle (marching dash de Fase 1), pausarla mientras se dibuja
      // (una animación CSS corriendo supera al inline style y rompería el draw-on; además dasharray inline
      //  volvería sólida la línea). Se restaura en onComplete.
      const hadIdleAnim = getComputedStyle(p).animationName !== "none";
      if (hadIdleAnim) p.style.animationName = "none";
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(p, {
        strokeDashoffset: 0, duration: 1.1, ease: "power1.inOut",
        scrollTrigger: { trigger: p, start: "top 85%", once: true },
        onComplete: () => {
          // Devolver el control al CSS: limpiar el dasharray/offset inline de GSAP y reanudar el marching dash.
          gsap.set(p, { clearProps: "strokeDasharray,strokeDashoffset" });
          if (hadIdleAnim) p.style.animationName = "";
        },
      });
    });
  }, { scope: scopeRef });
}
