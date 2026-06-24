# Alexis Jaramillo Martínez

**Ingeniero telemático — Cali, Colombia**

Telemática es telecomunicaciones más informática, y describe bien lo que hago: conecto tecnologías de distinta naturaleza —servicios, datos y modelos— en sistemas que funcionan de extremo a extremo y resuelven un problema de negocio. La IA es una de las piezas que integro, no la etiqueta: la trato con la misma disciplina de ingeniería que cualquier otro componente.

Vengo de Ingeniería Telemática (Universidad Icesi, grado en trámite) y curso ahí mismo la Maestría en IA Aplicada.

## El oficio, comprobado dos veces

Integrar lo distinto se demuestra en dos registros: componiendo un producto en producción, y abstrayendo piezas intercambiables tras una sola interfaz en un banco offline reproducible.

**Carrillo Abogados — plataforma legal-tech, de extremo a extremo** *(cliente · nov 2025 – may 2026)*
Dirigí el desarrollo técnico de la plataforma de una firma de abogados: sitio público, portal autenticado y una API sobre siete microservicios que operan como un solo producto. El núcleo es «Moni», un asistente con RAG (Gemini 2.5 Flash + pgvector) integrado al flujo real de captación y enrutamiento de leads; un servicio de integración con n8n lo conecta con el resto por webhooks. Fui administrador de la organización en GitHub y autor principal del código.
Spring Boot / Java 21 · FastAPI · Next.js 16 · PostgreSQL + pgvector · GCP Cloud Run · Terraform · n8n.

**harness + orus — infraestructura para agentes de IA** *(proyecto · 2026 – presente)*
Mi base para construir agentes y, a la vez, el Proyecto I de la maestría. *harness* pone las primitivas: Clean Architecture en cuatro capas, el patrón de tres agentes (orquestador → generador → evaluador) y failover entre siete proveedores de LLM tras una sola interfaz. *orus* es el primer agente que corre encima: un asistente de desarrollo con loop ReAct propio —sin LangChain ni LangGraph— y memoria que persiste entre sesiones. Lo que más cuido es que la evaluación sea reproducible: el mismo dataset da el mismo resultado cada vez.
Python 3.12 · LiteLLM · Pydantic v2 · Langfuse v3 · MLflow · 546 pruebas · >95 % de cobertura · 10 ADRs.

**claude-code-ops — tooling de agentes y automatización con LLMs** *(proyecto · 2026 – presente)*
Mi entorno para ingeniería de agentes sobre Claude Code: hooks en Python, cinco servidores MCP integrados y un sistema de memoria que clasifica la vigencia de cada nota para que el contexto no se pudra entre sesiones.

> El código de Carrillo es del cliente; el de mis proyectos personales es privado. Si quieres ver el detalle técnico, escríbeme y lo conversamos.

## Stack

- **Integración y backend:** microservicios, APIs REST, API gateway, OAuth2/JWT · Java / Spring Boot, FastAPI · PostgreSQL + pgvector
- **Plataformas y DevOps:** GCP (Cloud Run), Terraform (IaC), Docker, CI/CD (GitHub Actions), Linux, observabilidad (Grafana / Prometheus / Langfuse)
- **Frontend:** TypeScript, React, Next.js
- **IA y datos:** LLMs, RAG, agentes (ReAct), evaluación reproducible · Python, scikit-learn, series de tiempo · embeddings (BGE-m3) · MLflow · CRISP-ML(Q)
- **Automatización:** n8n, webhooks, pipelines ETL/ELT

## Dónde encontrarme

- Sitio: https://alexisjaramillo.vercel.app
- LinkedIn: https://linkedin.com/in/alexis-jaramillo-dev
- Correo: alexisj4a@gmail.com
