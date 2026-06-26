// landing/lib/motion/SmoothScroll.tsx
"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldEnableSmoothScroll } from "./prefersReducedMotion";
import { NAV_H } from "./constants";

// scope de módulo: corre también en SSR, pero es seguro (GSAP/ScrollTrigger guardan
// el acceso a window; registerPlugin no requiere window).
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const [enabled, setEnabled] = useState(false);

  // Decidir tras montar -> sin mismatch de hidratación (window es solo-cliente).
  useEffect(() => {
    const mq = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    setEnabled(shouldEnableSmoothScroll(mq));
  }, []);

  // Lenis dueño del reloj: su rAF lo conduce el ticker de GSAP; matar lag smoothing.
  useEffect(() => {
    if (!enabled) return;
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000); // s -> ms
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh(); // alturas tras montar Lenis
    return () => {
      gsap.ticker.remove(update);
    };
  }, [enabled]);

  useLenis(ScrollTrigger.update); // refrescar ScrollTrigger en cada scroll (auto-suscribe/limpia)

  if (!enabled) return <>{children}</>; // reduced-motion: scroll nativo, sin Lenis
  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, anchors: { offset: -NAV_H } }}>
      {children}
    </ReactLenis>
  );
}
