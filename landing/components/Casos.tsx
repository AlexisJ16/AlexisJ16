"use client";
import { useRef } from "react";
import { useCountUp } from "@/lib/motion/useCountUp";

export function Casos() {
  const containerRef = useRef<HTMLDivElement>(null);
  useCountUp(containerRef);
  return (
    <div className="cards" ref={containerRef}>
      {/* harness + orus — proyecto destacado */}
      <article className="pc pc--feature" data-reveal>
        <div className="pc__main">
          <div className="pc__head">
            <span className="pc__tag mono">Proyecto destacado · 2026 – presente</span>
            <span className="pc__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5a7 7 0 0 1 6 3.5M12 19a7 7 0 0 1-6-3.5" />
                <path d="M18 5v3.5h-3.5M6 19v-3.5h3.5" />
              </svg>
            </span>
          </div>
          <h3 className="pc__title">harness + orus</h3>
          <p className="pc__sub mono">Infraestructura para agentes de IA</p>
          <p className="pc__desc">
            Mi infraestructura para construir agentes, y a la vez el Proyecto I de la maestría.{" "}
            <b>harness</b> pone las primitivas: Clean Architecture en cuatro capas, tres agentes
            (orquestador, generador y evaluador) y failover entre siete proveedores de LLM tras una
            sola interfaz. <b>orus</b> es el primer agente que corre encima: un asistente de
            desarrollo con loop ReAct propio —sin LangChain ni LangGraph— y memoria que persiste
            entre sesiones. Lo que más cuido es que la evaluación sea reproducible: el mismo dataset
            da el mismo resultado cada vez que lo corro.
          </p>
          <div className="pc__foot">
            <a
              className="pc__link"
              href="https://github.com/AlexisJ16"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>
        <div className="pc__side">
          <ul className="stack">
            <li>Python 3.12</li>
            <li>LiteLLM</li>
            <li>Pydantic v2</li>
            <li>Langfuse v3</li>
            <li>MLflow</li>
            <li>pytest / ruff / mypy</li>
          </ul>
          <div className="metrics">
            <div className="metric">
              <b data-count>546</b>
              <span>pruebas reproducibles</span>
            </div>
            <div className="metric">
              <b data-count>≥95%</b>
              <span>cobertura de código</span>
            </div>
            <div className="metric">
              <b data-count>7</b>
              <span>proveedores de LLM en failover</span>
            </div>
            <div className="metric">
              <b data-count>10</b>
              <span>ADRs documentados</span>
            </div>
          </div>
        </div>
      </article>

      {/* Carrillo Abogados — cliente */}
      <article className="pc" data-reveal>
        <div className="pc__head">
          <span className="pc__tag mono">Cliente · Nov 2025 – May 2026</span>
          <span className="pc__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
              <path d="M3 12l9 4.5L21 12" />
              <path d="M3 16.5 12 21l9-4.5" />
            </svg>
          </span>
        </div>
        <h3 className="pc__title">Carrillo Abogados</h3>
        <p className="pc__sub mono">Plataforma legal-tech, de extremo a extremo</p>
        <p className="pc__desc">
          Dirigí el desarrollo técnico de la plataforma de una firma de abogados: sitio público,
          portal autenticado y una API sobre siete microservicios que operan como un solo producto.
          El núcleo es <b>Moni</b>, un asistente con RAG (Gemini 2.5 Flash + pgvector) integrado
          al flujo real de captación y enrutamiento de leads; un servicio de integración con n8n lo
          conecta con el resto por webhooks. Fui administrador de la organización en GitHub y autor
          principal del código.
        </p>
        <ul className="stack">
          <li>Spring Boot / Java 21</li>
          <li>FastAPI</li>
          <li>Next.js 16</li>
          <li>PostgreSQL + pgvector</li>
          <li>GCP Cloud Run</li>
          <li>Terraform</li>
          <li>n8n</li>
        </ul>
        <div className="pc__foot">
          <span className="pc__role">Líder técnico · 7 microservicios</span>
          <a className="pc__link" href="#contacto">
            Hablemos del caso <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>

      {/* claude-code-ops — proyecto */}
      <article className="pc" data-reveal>
        <div className="pc__head">
          <span className="pc__tag mono">Proyecto · 2026 – presente</span>
          <span className="pc__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="16" rx="2.5" />
              <path d="m7 9 3 3-3 3M13 15h4" />
            </svg>
          </span>
        </div>
        <h3 className="pc__title">claude-code-ops</h3>
        <p className="pc__sub mono">Tooling de agentes y automatización con LLMs</p>
        <p className="pc__desc">
          Mi entorno para ingeniería de agentes sobre Claude Code: hooks en Python, cinco servidores
          MCP integrados y un sistema de memoria que clasifica la vigencia de cada nota para que el
          contexto no se pudra entre sesiones. Aquí ensayo ideas de automatización con LLMs antes
          de llevarlas a un proyecto real.
        </p>
        <ul className="stack">
          <li>Python</li>
          <li>MCP</li>
          <li>Hooks</li>
          <li>Claude Code</li>
          <li>Sistema de memoria</li>
        </ul>
        <div className="pc__foot">
          <span className="pc__role">5 MCP · 3 hooks</span>
          <a
            className="pc__link"
            href="https://github.com/AlexisJ16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
        </div>
      </article>
    </div>
  );
}
