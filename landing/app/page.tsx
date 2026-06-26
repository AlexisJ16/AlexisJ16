import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { DoblePrueba } from "@/components/DoblePrueba";
import { Casos } from "@/components/Casos";
import { SobreMi } from "@/components/SobreMi";
import { Capacidades } from "@/components/Capacidades";

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
