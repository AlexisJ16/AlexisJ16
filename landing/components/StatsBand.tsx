"use client";
import { useRef } from "react";
import { useCountUp } from "@/lib/motion/useCountUp";

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  useCountUp(ref);
  return (
    <section id="stats" aria-label="Métricas por fuente" className="statsband">
      <div className="wrap">
        <div className="sb" ref={ref}>
          {/* cluster MÉTRICO — números que cuentan */}
          <div className="sb__cluster sb__cluster--metric" data-reveal>
            <p className="sb__src mono">harness + orus · banco offline reproducible</p>
            <dl className="sb__nums">
              <div><dt><b data-count>546</b></dt><dd>pruebas</dd></div>
              <div><dt><b data-count>≥95%</b></dt><dd>cobertura</dd></div>
              <div><dt><b data-count>10</b></dt><dd>ADRs</dd></div>
              <div><dt><b data-count>7</b></dt><dd>LLM en failover</dd></div>
            </dl>
          </div>
          {/* cluster NARRATIVO — etiquetas, sin count-up (asimetría anti-7=7) */}
          <div className="sb__cluster sb__cluster--narrative" data-reveal>
            <p className="sb__src mono">Carrillo Abogados · producción real</p>
            <ul className="sb__tags">
              <li><b>7</b> microservicios</li>
              <li>RAG con pgvector</li>
              <li>GCP + Terraform</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
