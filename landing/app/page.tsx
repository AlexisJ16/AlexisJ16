import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { DoblePrueba } from "@/components/DoblePrueba";
import { Casos } from "@/components/Casos";
import { SobreMi } from "@/components/SobreMi";
import { Capacidades } from "@/components/Capacidades";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";

export default function Home() {
  return (
    <>
      <a className="skip" href="#inicio">Saltar al contenido</a>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="contenido">
        <Hero />
        <section id="trabajo" className="section" aria-labelledby="trabajo-title">
          <div className="wrap">
            <DoblePrueba />
            <Casos />
          </div>
        </section>
        <SobreMi />
        <Capacidades />
        <Contacto />
      </main>
      <Footer />
      <RevealProvider />
    </>
  );
}
