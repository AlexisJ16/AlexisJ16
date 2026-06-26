export function Hero() {
  return (
    <section
      id="inicio"
      className="scene"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className="atmos" aria-hidden="true"></div>
      <span
        id="top-sentinel"
        aria-hidden="true"
        style={{ position: "absolute", top: 0, height: "1px", width: "1px" }}
      ></span>
      <div className="wrap">
        <div className="hero">
          <div className="hero__copy">
            <span className="ann">
              <span className="led" aria-hidden="true"></span>
              Ingeniero telemático · en proceso de grado · Cali, Colombia
            </span>
            <h1 className="lede" id="hero-title">
              Conecto tecnologías de distinta naturaleza en un solo sistema que{" "}
              <span className="proof">funciona</span>.
            </h1>
            <p className="sub">
              Telecomunicaciones más informática. Integro servicios, datos y
              modelos en sistemas que operan de extremo a extremo y resuelven un
              problema de negocio.
            </p>
            <div className="cta">
              <a className="btn btn--primary" href="#contacto">
                Cuéntame qué quieres construir{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="btn btn--ghost" href="assets/cv.pdf" download>
                <svg viewBox="0 0 24 24" strokeWidth={1.7} aria-hidden="true">
                  <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" />
                </svg>
                Descargar CV
              </a>
            </div>
            <div className="factrow">
              <span className="f">
                <span className="d" aria-hidden="true"></span>
                <b>7</b> microservicios en producción
              </span>
              <span className="f">
                <span className="d" aria-hidden="true"></span>
                <b>546</b> pruebas reproducibles
              </span>
              <span className="f">
                <span className="d" aria-hidden="true"></span>
                <b>10</b> decisiones de arquitectura (ADR)
              </span>
            </div>
          </div>

          <figure className="hero__signal">
            <figcaption className="hsig__bar">
              <span className="dots">
                <span className="d on"></span>
                <span className="d"></span>
                <span className="d"></span>
              </span>
              <span>señal · sistema integrado</span>
              <span className="rt">telemetría</span>
            </figcaption>
            <div className="hsig__body">
              <svg
                className="hero-sig"
                viewBox="0 0 1120 168"
                role="img"
                aria-label="Una señal recorre cinco capas de distinta naturaleza —interfaz, servicios, datos, modelos y nube— y las integra en un solo sistema."
              >
                <defs>
                  <path
                    id="bus"
                    d="M60 96 L300 96 L322 96 L338 70 L354 124 L370 80 L386 96 L470 96 L1060 96"
                  />
                </defs>
                <use href="#bus" className="sig-base" />
                <path
                  d="M300 96 L322 96 L338 70 L354 124 L370 80 L386 96 L470 96"
                  className="sig-wave"
                />
                <g>
                  <line
                    className="sig-stub"
                    x1="160"
                    y1="96"
                    x2="160"
                    y2="64"
                  />
                  <rect
                    className="sig-mod"
                    x="151"
                    y="47"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <text
                    className="sig-label"
                    x="160"
                    y="34"
                    textAnchor="middle"
                  >
                    interfaz
                  </text>
                  <line
                    className="sig-stub"
                    x1="560"
                    y1="96"
                    x2="560"
                    y2="64"
                  />
                  <rect
                    className="sig-mod"
                    x="551"
                    y="47"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <text
                    className="sig-label"
                    x="560"
                    y="34"
                    textAnchor="middle"
                  >
                    servicios
                  </text>
                  <line
                    className="sig-stub"
                    x1="720"
                    y1="96"
                    x2="720"
                    y2="128"
                  />
                  <rect
                    className="sig-mod"
                    x="711"
                    y="128"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <text
                    className="sig-label"
                    x="720"
                    y="160"
                    textAnchor="middle"
                  >
                    datos
                  </text>
                  <line
                    className="sig-stub"
                    x1="880"
                    y1="96"
                    x2="880"
                    y2="64"
                  />
                  <rect
                    className="sig-mod"
                    x="871"
                    y="47"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <text
                    className="sig-label"
                    x="880"
                    y="34"
                    textAnchor="middle"
                  >
                    modelos
                  </text>
                  <line
                    className="sig-stub"
                    x1="1020"
                    y1="96"
                    x2="1020"
                    y2="128"
                  />
                  <rect
                    className="sig-mod"
                    x="1011"
                    y="128"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <text
                    className="sig-label"
                    x="1020"
                    y="160"
                    textAnchor="middle"
                  >
                    nube
                  </text>
                </g>
                <g>
                  <circle className="pulse-h" r="7">
                    <animateMotion dur="5.2s" repeatCount="indefinite">
                      <mpath href="#bus" />
                    </animateMotion>
                  </circle>
                  <circle className="pulse" r="3.3">
                    <animateMotion dur="5.2s" repeatCount="indefinite">
                      <mpath href="#bus" />
                    </animateMotion>
                  </circle>
                </g>
              </svg>
            </div>
          </figure>
        </div>

        <div className="trust">
          <div className="trust__in">
            <span className="lbl">Trabajo con</span>
            <span className="it">
              <b>Java 21</b> · Spring Boot
            </span>
            <span className="sep"></span>
            <span className="it">
              <b>Next.js</b> · TypeScript
            </span>
            <span className="sep"></span>
            <span className="it">
              <b>PostgreSQL</b> + pgvector
            </span>
            <span className="sep"></span>
            <span className="it">
              <b>GCP</b> · Terraform
            </span>
            <span className="sep"></span>
            <span className="it">
              <b>Python</b> · LiteLLM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
