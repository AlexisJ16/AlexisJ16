// HV Alexis Jaramillo — plantilla (lee contenido desde hv-data.json)
#let d = json("hv-data.json")

#let accent = rgb("#21395c")
#let ink = rgb("#1b1b1b")
#let muted = rgb("#5b6470")
#let rulecol = rgb("#d7dbe1")

#set document(title: "Alexis Jaramillo Martínez — Hoja de vida", author: "Alexis Jaramillo Martínez")
#set page(paper: "a4", margin: (x: 1.5cm, top: 1.15cm, bottom: 0.9cm))
#set text(font: "Lato", size: 9.3pt, fill: ink, lang: "es", hyphenate: false)
#set par(leading: 0.55em, spacing: 0.5em, justify: false)

#let sec(title) = block(above: 7.5pt, below: 4.2pt, width: 100%)[
  #text(size: 9.1pt, weight: "bold", fill: accent, tracking: 1.3pt)[#upper(title)]
  #v(1.8pt)
  #line(length: 100%, stroke: 0.6pt + rulecol)
]

#let entry(title, dates, ctx: none, body: none) = block(below: 5pt, width: 100%)[
  #grid(columns: (1fr, auto), column-gutter: 6pt, align: (left + bottom, right + bottom),
    text(weight: "bold", size: 9.7pt)[#title],
    text(size: 8.6pt, fill: muted)[#dates])
  #if ctx != none { v(0.8pt); text(size: 8.8pt, fill: muted, style: "italic")[#ctx] }
  #if body != none { v(2.2pt); body }
]

#let bul(items) = {
  set list(marker: text(fill: accent)[•], indent: 1pt, body-indent: 5pt, spacing: 2.7pt)
  list(..items)
}

// ---------- Encabezado ----------
#text(size: 19pt, weight: 800, tracking: 1.3pt)[ALEXIS JARAMILLO MARTÍNEZ]
#v(2pt)
#text(size: 10pt, fill: accent, weight: "semibold")[#d.titular_profesional]
#v(3pt)
#text(size: 8.5pt, fill: muted)[
  Cali, Colombia #h(5pt)·#h(5pt) alexisj4a\@gmail.com #h(5pt)·#h(5pt) (+57) 305 323 5152 #h(5pt)·#h(5pt) linkedin.com/in/alexis-jaramillo-dev #h(5pt)·#h(5pt) github.com/AlexisJ16
]
#v(4pt)
#line(length: 100%, stroke: 0.9pt + accent)

// ---------- Perfil ----------
#sec("Perfil")
#d.perfil

// ---------- Experiencia ----------
#sec("Experiencia")
#for e in d.experiencia {
  entry(e.rol + "  —  " + e.organizacion, e.fechas, ctx: e.contexto, body: bul(e.bullets))
}

// ---------- Proyectos ----------
#sec("Proyectos")
#for p in d.proyectos {
  entry(p.nombre, p.fechas, ctx: p.contexto, body: bul(p.bullets))
}

// ---------- Educación ----------
#sec("Educación")
#for ed in d.educacion {
  entry(ed.programa + "  —  " + ed.institucion, ed.fechas, ctx: none, body: text(size: 9.2pt, fill: muted)[#ed.detalle])
}

// ---------- Habilidades ----------
#sec("Habilidades técnicas")
#for h in d.habilidades {
  block(below: 3.2pt)[#text(weight: "bold")[#h.grupo:] #h.items.join("  ·  ")]
}

// ---------- Certificaciones e Idiomas ----------
#sec("Certificaciones e idiomas")
#for c in d.certificaciones {
  block(below: 2.5pt)[#text(fill: accent)[•] #h(3pt) #c]
}
#block(above: 3pt)[#text(weight: "bold")[Idiomas:] #d.idiomas]

// ---------- Otros ----------
#if "otros" in d and d.otros != "" {
  sec("Liderazgo y actividades")
  d.otros
}
