export function SobreMi() {
  return (
    <section id="sobre-mi" className="section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about">
          <div className="about__bio" data-reveal>
            <p className="eyebrow"><span className="n">02</span> Sobre mí</p>
            <h2 className="s-title" id="about-title">Cómo trabajo</h2>
            <p>Soy Alexis, <b>ingeniero telemático</b> en Cali. Telemática es telecomunicaciones más informática, y describe bien lo que hago: conectar tecnologías de distinta naturaleza en sistemas que funcionan de principio a fin, no piezas sueltas que brillan en una demo y se caen al tocar datos reales.</p>
            <p>Mi trabajo más sólido hasta hoy fue dirigir el desarrollo técnico de una plataforma legal-tech para una firma de abogados: siete microservicios operando como un solo producto, con un asistente de IA integrado al flujo real de captación. En paralelo construyo <b>harness</b> y <b>orus</b>, mi infraestructura para agentes, donde cuido que la evaluación sea reproducible: el mismo dataset da el mismo resultado cada vez.</p>
            <p>Vengo de Ingeniería Telemática en la Universidad Icesi, con el grado en trámite, y curso ahí mismo la Maestría en IA Aplicada. Antes fui monitor de matemáticas, cálculo y estadística por más de dos años; explicar cosas difíciles con calma se me volvió oficio, y se nota en cómo documento: ADRs, runbooks y commits que el que venga después pueda leer.</p>
            <div className="about__cta">
              <a className="btn btn--primary" href="assets/cv.pdf" download>Descargar CV</a>
              <a className="btn btn--ghost" href="#contacto">Agendar una llamada</a>
            </div>
          </div>
          <aside className="about__side" data-reveal aria-label="Perfil">
            <figure className="portrait">
              <div className="portrait__ph" aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none">
                  <path d="M40 12 L64 60 L16 60 Z" stroke="#5E9DFF" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="40" cy="12" r="3.2" fill="#5E9DFF" />
                  <circle cx="16" cy="60" r="3.2" fill="#5E9DFF" />
                  <circle cx="64" cy="60" r="3.2" fill="#CFAC6B" />
                  <path d="M4 40 H20 l4 -7 5 12 3 -5 H76" stroke="#5E9DFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
                </svg>
                <span className="mono">retrato</span>
              </div>
              <figcaption className="portrait__cap">Alexis Jaramillo</figcaption>
            </figure>
            <dl className="facts">
              <div><dt>Ubicación</dt><dd>Cali, Colombia</dd></div>
              <div><dt>Idiomas</dt><dd>Español nativo · Inglés B1</dd></div>
              <div><dt>Formación</dt><dd>Maestría en IA Aplicada (en curso)<br />Ing. Telemática (grado en trámite)</dd></div>
              <div><dt>Oficio</dt><dd>Integración de sistemas de extremo a extremo</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
