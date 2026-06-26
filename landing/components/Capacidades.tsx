export function Capacidades() {
  return (
    <section id="capacidades" className="section" aria-labelledby="caps-title">
      <div className="wrap">
        <div className="s-head" data-reveal>
          <p className="eyebrow"><span className="n">03</span> Lo que construyo</p>
          <h2 className="s-title" id="caps-title">Dónde puedo ser útil.</h2>
        </div>
        <div className="caps">
          <article className="cap" data-reveal>
            <span className="cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 4v16M17 4v16M3 12h18M18 9l3 3-3 3" />
              </svg>
            </span>
            <div>
              <h3>Integración de sistemas de extremo a extremo</h3>
              <p>Conecto servicios, datos y modelos detrás de una sola experiencia: API gateway, microservicios, contratos y el pegamento que falta para que todo opere como un producto, no como partes sueltas.</p>
            </div>
          </article>
          <article className="cap" data-reveal>
            <span className="cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
                <path d="M3 12l9 4.5L21 12" />
                <path d="M3 16.5 12 21l9-4.5" />
              </svg>
            </span>
            <div>
              <h3>Plataformas y backend en la nube</h3>
              <p>La columna que sostiene el resto: microservicios en Spring Boot o FastAPI, APIs con OAuth2/JWT, despliegue en GCP Cloud Run con Terraform y CI/CD en GitHub Actions.</p>
            </div>
          </article>
          <article className="cap" data-reveal>
            <span className="cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5a7 7 0 0 1 6 3.5M12 19a7 7 0 0 1-6-3.5" />
                <path d="M18 5v3.5h-3.5M6 19v-3.5h3.5" />
              </svg>
            </span>
            <div>
              <h3>IA aplicada, con disciplina de ingeniería</h3>
              <p>Asistentes con RAG y agentes con loop ReAct conectados a tus datos. La IA entra como un componente más del sistema, con una evaluación que puedes volver a correr y obtener el mismo número.</p>
            </div>
          </article>
          <article className="cap" data-reveal>
            <span className="cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l4-5 3 3 4-7 3 5 4-3" />
                <circle cx="14" cy="8" r="1.3" fill="#5E9DFF" stroke="none" />
              </svg>
            </span>
            <div>
              <h3>Automatización y observabilidad</h3>
              <p>n8n, webhooks y pipelines para que las tareas repetitivas dejen de pasar por tus manos; métricas, logs y trazas con Langfuse y MLflow para saber si el sistema mejora o empeora con cada cambio.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
