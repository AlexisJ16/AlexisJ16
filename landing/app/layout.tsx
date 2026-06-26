import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexisjaramillo.vercel.app/"),
  title: "Alexis Jaramillo — Ingeniero telemático",
  description:
    "Ingeniero telemático (en proceso de grado) en Cali, Colombia. Conecto servicios, datos y modelos en sistemas que operan de extremo a extremo: plataformas en la nube, microservicios e IA aplicada con evaluación reproducible.",
  authors: [{ name: "Alexis Jaramillo Martínez" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Alexis Jaramillo — Ingeniero telemático",
    description:
      "Ingeniero telemático en proceso de grado. Conecto tecnologías de distinta naturaleza en un solo sistema que funciona: plataformas, microservicios e IA aplicada, de extremo a extremo.",
    locale: "es_CO",
    siteName: "Alexis Jaramillo",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Alexis Jaramillo — Ingeniero telemático" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Jaramillo — Ingeniero telemático",
    description: "Ingeniero telemático en proceso de grado. Conecto tecnologías de distinta naturaleza en un solo sistema que funciona.",
    images: ["/assets/og-image.png"],
  },
  icons: { icon: "/assets/icon.png", apple: "/assets/icon.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexis Jaramillo Martínez",
  url: "https://alexisjaramillo.vercel.app/",
  image: "https://alexisjaramillo.vercel.app/assets/og-image.png",
  jobTitle: "Ingeniero telemático (en proceso de grado)",
  email: "alexisj4a@gmail.com",
  telephone: "+573053235152",
  address: { "@type": "PostalAddress", addressLocality: "Cali", addressCountry: "CO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Icesi" },
  knowsLanguage: ["es", "en"],
  knowsAbout: ["Integración de sistemas", "Microservicios", "Arquitectura de software", "Plataformas en la nube", "DevOps", "Retrieval-Augmented Generation", "Agentes de IA", "Evaluación de modelos", "PostgreSQL", "Terraform"],
  sameAs: ["https://linkedin.com/in/alexis-jaramillo-dev", "https://github.com/AlexisJ16"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#08090D" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
