"use client";
import { useRef } from "react";
import { useDrawOn } from "@/lib/motion/useDrawOn";

export function DoblePrueba() {
  const containerRef = useRef<HTMLDivElement>(null);
  useDrawOn(containerRef);

  return (
    <div ref={containerRef}>
      <div className="s-head" data-reveal>
        <p className="eyebrow"><span className="n">01</span> La doble prueba</p>
        <h2 className="s-title" id="trabajo-title">Mismo oficio, dos formas.</h2>
        <p className="s-lead">Integrar lo distinto se demuestra dos veces, en dos registros: componiendo siete servicios en un producto en producción, y abstrayendo piezas intercambiables tras una sola interfaz en un banco offline reproducible.</p>
      </div>

      <div className="diptych" data-reveal>
        {/* CARRILLO */}
        <div className="dwell">
          <div className="dwell__bar">
            <span className="dots"><span className="d on"></span><span className="d"></span><span className="d"></span></span>
            <span className="ttl">Carrillo · composición</span>
            <span className="rt">producción real</span>
          </div>
          <div className="dwell__body">
            <svg className="arch" viewBox="0 0 380 300" role="img" aria-label="Arquitectura de Carrillo: cliente, API gateway, siete microservicios, datos PostgreSQL con pgvector y Moni RAG, y observabilidad.">
              <defs>
                <marker id="ahC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0 1 L9 5 L0 9 Z" fill="#5E9DFF"/>
                </marker>
              </defs>
              <rect className="a-node" x="40" y="40" width="48" height="24" rx="4"/>
              <text className="a-label" x="64" y="33" textAnchor="middle">cliente</text>
              <path className="a-edge a-edge--anim" data-draw d="M64 64 L64 105 L106 105" fill="none" markerEnd="url(#ahC)"/>
              <rect className="a-node" x="110" y="92" width="160" height="26" rx="5"/>
              <text className="a-label" x="190" y="109" textAnchor="middle">API gateway · OAuth2</text>
              <line className="a-edge" x1="190" y1="118" x2="190" y2="138"/>
              <line className="a-edge" x1="61" y1="138" x2="337" y2="138"/>
              <line className="a-edge" x1="61" y1="138" x2="61" y2="150"/>
              <line className="a-edge" x1="107" y1="138" x2="107" y2="150"/>
              <line className="a-edge" x1="153" y1="138" x2="153" y2="150"/>
              <line className="a-edge" x1="199" y1="138" x2="199" y2="150"/>
              <line className="a-edge" x1="245" y1="138" x2="245" y2="150"/>
              <line className="a-edge" x1="291" y1="138" x2="291" y2="150"/>
              <line className="a-edge" x1="337" y1="138" x2="337" y2="150"/>
              <rect className="a-svc" x="44" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="90" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="136" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="182" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="228" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="274" y="150" width="34" height="30" rx="4"/>
              <rect className="a-svc" x="320" y="150" width="34" height="30" rx="4" style={{ fill: "rgba(94,157,255,.1)" }}/>
              <text className="a-sub" x="337" y="145" textAnchor="middle" style={{ fill: "var(--ice)" }}>Moni · RAG</text>
              <text className="a-sub" x="170" y="197" textAnchor="middle">7 servicios · Java 21 + Python</text>
              <line className="a-edge a-edge--anim" data-draw x1="190" y1="180" x2="190" y2="222" markerEnd="url(#ahC)"/>
              <rect className="a-node" x="70" y="222" width="240" height="28" rx="5"/>
              <text className="a-label" x="190" y="240" textAnchor="middle">PostgreSQL + pgvector</text>
              <path className="a-edge--fb" d="M337 180 L337 236 L312 236" fill="none" markerEnd="url(#ahC)"/>
              <line className="a-edge" x1="190" y1="250" x2="190" y2="270"/>
              <rect className="a-node" x="70" y="270" width="240" height="22" rx="5" style={{ stroke: "rgba(94,157,255,.4)" }}/>
              <text className="a-sub" x="190" y="284" textAnchor="middle" style={{ fill: "var(--t-2)" }}>observabilidad · métricas · logs · trazas</text>
            </svg>
            <div className="stamp"><span className="sq sq--ice" aria-hidden="true"></span>Siete servicios operando como un solo producto · GCP · Terraform</div>
          </div>
        </div>
        {/* HARNESS */}
        <div className="dwell">
          <div className="dwell__bar">
            <span className="dots"><span className="d on"></span><span className="d"></span><span className="d"></span></span>
            <span className="ttl">harness · abstracción</span>
            <span className="rt">banco offline</span>
          </div>
          <div className="dwell__body">
            <svg className="arch" viewBox="0 0 380 300" role="img" aria-label="Arquitectura de harness: patrón triple-agente —orquestador, generador, evaluador— sobre una abstracción de proveedores de LLM con failover.">
              <defs>
                <marker id="ahH" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0 1 L9 5 L0 9 Z" fill="#5E9DFF"/>
                </marker>
                <path id="flowH" d="M190 56 L70 150 L310 150 Z"/>
              </defs>
              <line className="a-edge a-edge--anim" data-draw x1="182" y1="66" x2="80" y2="142" markerEnd="url(#ahH)"/>
              <line className="a-edge a-edge--anim" data-draw x1="88" y1="150" x2="292" y2="150" markerEnd="url(#ahH)"/>
              <line className="a-edge--fb" x1="300" y1="142" x2="198" y2="66" markerEnd="url(#ahH)"/>
              <circle className="a-ring" cx="190" cy="56" r="13"/>
              <circle className="a-node" cx="190" cy="56" r="7"/>
              <circle className="a-ring" cx="70" cy="150" r="13"/>
              <circle className="a-node" cx="70" cy="150" r="7"/>
              <circle className="a-ring" cx="310" cy="150" r="13"/>
              <circle className="a-node a-node--g" cx="310" cy="150" r="7"/>
              <text className="a-label" x="190" y="34" textAnchor="middle">Orquestador</text>
              <text className="a-label" x="70" y="178" textAnchor="middle">Generador</text>
              <text className="a-label" x="310" y="178" textAnchor="middle">Evaluador</text>
              <g>
                <circle className="a-tok-h" r="7">
                  <animateMotion dur="5.6s" repeatCount="indefinite" keyPoints="0;0.33;0.4;0.73;0.8;1" keyTimes="0;0.3;0.4;0.7;0.8;1" calcMode="linear">
                    <mpath href="#flowH"/>
                  </animateMotion>
                </circle>
                <circle className="a-tok" r="3.4">
                  <animateMotion dur="5.6s" repeatCount="indefinite" keyPoints="0;0.33;0.4;0.73;0.8;1" keyTimes="0;0.3;0.4;0.7;0.8;1" calcMode="linear">
                    <mpath href="#flowH"/>
                  </animateMotion>
                </circle>
              </g>
              <line className="a-edge" x1="190" y1="206" x2="190" y2="224"/>
              <rect className="a-node" x="96" y="224" width="188" height="26" rx="5"/>
              <text className="a-label" x="190" y="241" textAnchor="middle">LiteLLM · una interfaz</text>
              <line className="a-edge--fb" x1="120" y1="250" x2="120" y2="266"/>
              <line className="a-edge--fb" x1="155" y1="250" x2="155" y2="266"/>
              <line className="a-edge--fb" x1="190" y1="250" x2="190" y2="266"/>
              <line className="a-edge--fb" x1="225" y1="250" x2="225" y2="266"/>
              <line className="a-edge--fb" x1="260" y1="250" x2="260" y2="266"/>
              <g style={{ fill: "rgba(154,164,182,.12)", stroke: "rgba(154,164,182,.4)", strokeWidth: 1 }}>
                <rect x="112" y="266" width="16" height="16" rx="3"/>
                <rect x="147" y="266" width="16" height="16" rx="3"/>
                <rect x="182" y="266" width="16" height="16" rx="3"/>
                <rect x="217" y="266" width="16" height="16" rx="3"/>
                <rect x="252" y="266" width="16" height="16" rx="3"/>
              </g>
              <text className="a-sub" x="190" y="296" textAnchor="middle">proveedores intercambiables · failover</text>
            </svg>
            <div className="stamp"><span className="sq sq--g" aria-hidden="true"></span>Evaluación reproducible · rescore bit-exacto · 546 pruebas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
