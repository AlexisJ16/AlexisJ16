"use client";

import { useNavScrolled } from "@/lib/hooks/useNavScrolled";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

const NAV_LINKS = [
  { href: "#trabajo", id: "trabajo", label: "Trabajo" },
  { href: "#proceso", id: "proceso", label: "Proceso" },
  { href: "#capacidades", id: "capacidades", label: "Capacidades" },
  { href: "#sobre-mi", id: "sobre-mi", label: "Sobre mí" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

const SPY_IDS = ["inicio", "trabajo", "proceso", "capacidades", "sobre-mi", "faq", "contacto"];

export function Nav() {
  const scrolled = useNavScrolled();
  const active = useScrollSpy(SPY_IDS);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`} id="nav">
      <div className="nav__in">
        <a className="brand" href="#inicio" aria-label="Alexis Jaramillo, inicio">
          <span className="brand__mk" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3 L17 16 L3 16 Z" fill="none" stroke="#5E9DFF" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="10" cy="3" r="1.5" fill="#5E9DFF" />
              <circle cx="3" cy="16" r="1.5" fill="#5E9DFF" />
              <circle cx="17" cy="16" r="1.5" fill="#CFAC6B" />
            </svg>
          </span>
          Alexis Jaramillo
        </a>
        <nav className="nav__links" aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, id, label }) => (
            <a
              key={id}
              href={href}
              className={active === id ? "active" : undefined}
              aria-current={active === id ? true : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__r">
          <span className="pill">
            <span className="led" aria-hidden="true"></span>
            <span>Disponible</span>
          </span>
          <a className="btn-sm" href="#contacto">Hablemos</a>
        </div>
      </div>
    </header>
  );
}
