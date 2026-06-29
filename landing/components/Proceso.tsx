"use client";
import { useRef } from "react";
import { useProcessScrub } from "@/lib/motion/useProcessScrub";

const STEPS = [
  { k: "CRISP-ML(Q)", src: "harness", d: "Encuadro el problema de negocio antes que el modelo: qué decide el sistema, con qué datos y con qué criterio de éxito." },
  { k: "ADR por contexto", src: "harness + Carrillo", d: "Cada decisión de arquitectura queda escrita —contexto y alternativas— para que quien venga después la entienda." },
  { k: "Evaluación offline reproducible", src: "harness", d: "Un banco de pruebas que da el mismo resultado cada vez: rescore bit-exacto antes de tocar producción." },
  { k: "Deploy controlado", src: "Carrillo", d: "Salidas a producción reversibles, sin auto-apply: lo que se despliega se puede revertir." },
  { k: "Runbooks / handoff operable", src: "Carrillo", d: "Se entrega algo que el cliente opera y mantiene: runbooks, métricas y trazas, no una caja negra." },
];

export function Proceso() {
  const ref = useRef<HTMLDivElement>(null);
  useProcessScrub(ref, STEPS.length);
  return (
    <section id="proceso" className="section" aria-labelledby="proceso-title">
      <div className="wrap">
        <div className="s-head" data-reveal>
          <p className="eyebrow"><span className="n">02</span> Cómo trabajo</p>
          <h2 className="s-title" id="proceso-title">El método, paso a paso.</h2>
          <p className="s-lead">No es de un solo proyecto: es cómo trabajo, compuesto entre el banco de pruebas (harness) y la producción real (Carrillo). Cada paso indica de dónde viene.</p>
        </div>
        <div className="process" ref={ref}>
          <div className="process__rail" aria-hidden="true"><span className="process__rail-fill" data-rail-fill></span></div>
          <ol className="process__steps">
            {STEPS.map((s, i) => (
              <li className="pstep" data-step key={s.k}>
                <span className="pstep__no mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="pstep__body">
                  <h3 className="pstep__title">{s.k} <span className="pstep__src mono">· {s.src}</span></h3>
                  <p className="pstep__desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
