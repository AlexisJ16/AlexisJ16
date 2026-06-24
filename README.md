# Alexis Jaramillo Martínez

**Ingeniero de IA generativa y agéntica — Cali, Colombia**

Construyo IA que se gana la confianza con pruebas, no con demos. Me dedico a la parte que pocos quieren: que un sistema de IA aguante el uso diario y que mañana se pueda repetir la evaluación y obtener el mismo número.

Vengo de Ingeniería Telemática (Universidad Icesi, grado en trámite) y curso ahí mismo la Maestría en IA Aplicada.

## En qué trabajo

**harness + orus — infraestructura para agentes de IA**
Mi base para construir agentes y, a la vez, el Proyecto I de la maestría. *harness* pone las primitivas: Clean Architecture en cuatro capas, el patrón de tres agentes (orquestador → generador → evaluador) y failover entre siete proveedores de LLM, uno distinto por rol. *orus* es el primer agente que corre encima, un asistente de desarrollo con loop ReAct propio —sin LangChain ni LangGraph— y memoria que persiste entre sesiones. Lo que más cuido es que la evaluación sea reproducible: el mismo dataset da el mismo resultado cada vez.
Python 3.12 · LiteLLM · Pydantic v2 · Langfuse v3 · MLflow · 546 pruebas · >95 % de cobertura.

**Carrillo Abogados — plataforma legal-tech con IA (cliente, nov 2025 – may 2026)**
Dirigí el desarrollo técnico de la plataforma de una firma de abogados: sitio público, portal autenticado y una API sobre siete microservicios. El corazón es «Moni», un asistente con RAG (Gemini 2.5 Flash + pgvector) metido en el flujo real de captación de clientes. Fui administrador de la organización en GitHub y autor principal del código.
Spring Boot/Java 21 · FastAPI · Next.js 16 · PostgreSQL + pgvector · GCP Cloud Run · Terraform · n8n.

**claude-code-ops — automatización con LLMs**
Mi banco de pruebas para ingeniería de agentes sobre Claude Code: hooks en Python, cinco servidores MCP integrados y un sistema de memoria que clasifica la vigencia de cada nota para que el contexto no se pudra entre sesiones.

> El código de estos proyectos es privado. Si quieres ver el detalle técnico, escríbeme y lo conversamos.

## Stack

- **IA y datos:** LLMs, RAG, agentes (ReAct), evaluación de modelos · Python, scikit-learn, series de tiempo · pgvector, embeddings (BGE-m3) · MLflow, Langfuse · CRISP-ML(Q)
- **Backend:** Java/Spring Boot, FastAPI, APIs REST, microservicios, PostgreSQL
- **Frontend:** TypeScript, React, Next.js
- **Cloud y DevOps:** GCP (Cloud Run), Terraform, Docker, CI/CD (GitHub Actions), Linux, observabilidad (Grafana/Prometheus)
- **Automatización:** n8n, pipelines ETL/ELT

## Dónde encontrarme

- Sitio: https://alexisjaramillo.vercel.app
- LinkedIn: https://linkedin.com/in/alexis-jaramillo-dev
- Correo: alexisj4a@gmail.com
