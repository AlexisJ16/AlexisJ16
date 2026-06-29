import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { DoblePrueba } from "@/components/DoblePrueba";
import { Casos } from "@/components/Casos";
import { SobreMi } from "@/components/SobreMi";
import { Capacidades } from "@/components/Capacidades";
import { FAQ } from "@/components/FAQ";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";
import { HeroParallaxProvider } from "@/components/HeroParallaxProvider";
import { Proceso } from "@/components/Proceso";

export default function Home() {
  return (
    <>
      <a className="skip" href="#inicio">Saltar al contenido</a>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="contenido">
        <Hero />
        <StatsBand />
        <section id="trabajo" className="section" aria-labelledby="trabajo-title">
          <div className="wrap">
            <DoblePrueba />
            <Casos />
          </div>
        </section>
        <Proceso />
        <SobreMi />
        <Capacidades />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <RevealProvider />
      <HeroParallaxProvider />
    </>
  );
}
