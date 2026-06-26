"use client";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <span>Alexis Jaramillo · Cali, Colombia</span>
        <span className="sp">© {year}</span>
        <span><a href="https://github.com/AlexisJ16" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="https://linkedin.com/in/alexis-jaramillo-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
      </div>
    </footer>
  );
}
