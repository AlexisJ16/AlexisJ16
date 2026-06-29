const FAQS = [
  { q: "¿Estás disponible?", a: "Sí; busco roles de IA aplicada / ingeniería de IA-ML e integración de sistemas." },
  { q: "¿Qué roles buscas?", a: "IA aplicada, ingeniería de IA/ML e integración de extremo a extremo; en Cali o remoto." },
  { q: "¿Grado y maestría?", a: "Ingeniería Telemática en proceso de grado; Maestría en IA Aplicada en curso." },
  { q: "¿Modalidad?", a: "Cali presencial, remoto o híbrido." },
];

export function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="s-head" data-reveal>
          <p className="eyebrow"><span className="n">05</span> Preguntas frecuentes</p>
          <h2 className="s-title" id="faq-title">Lo que sueles querer saber.</h2>
        </div>
        <div className="faqlist">
          {FAQS.map((f) => (
            <details key={f.q} name="faq" className="faqitem" data-reveal>
              <summary>
                {f.q}
                <span className="faqitem__chev" aria-hidden="true">+</span>
              </summary>
              <div className="faqitem__body"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
