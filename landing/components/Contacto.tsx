export function Contacto() {
  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow" data-reveal><span className="n">06</span> Contacto</p>
        <h2 className="contact__title" id="contact-title" data-reveal>Cuéntame qué quieres construir.</h2>
        <p className="contact__lead" data-reveal>¿Tienes sistemas que no se hablan entre sí, o un proceso que pide una mano de ingeniería? Escríbeme y lo miramos. Respondo personalmente.</p>
        <a className="contact__email" href="mailto:alexisj4a@gmail.com" data-reveal>alexisj4a@gmail.com</a>
        <div className="contact__row" data-reveal>
          <a href="tel:+573053235152"><svg viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>(+57) 305 323 5152</a>
          <a href="https://linkedin.com/in/alexis-jaramillo-dev" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7"/></svg>linkedin.com/in/alexis-jaramillo-dev<span className="sr-only"> (abre en una pestaña nueva)</span></a>
          <a href="https://github.com/AlexisJ16" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true"><path d="M9 19c-4 1.5-4-2-6-2.5m12 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.9 2.7 5.9 3 5.9 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 9.4c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.1V21"/></svg>github.com/AlexisJ16<span className="sr-only"> (abre en una pestaña nueva)</span></a>
        </div>
        <a className="btn btn--primary" href="mailto:alexisj4a@gmail.com?subject=Proyecto" data-reveal>Escríbeme <span className="arr" aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
