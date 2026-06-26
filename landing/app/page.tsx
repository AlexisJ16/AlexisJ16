import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { DoblePrueba } from "@/components/DoblePrueba";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido">
        <Hero />
        <section id="trabajo" className="section" aria-labelledby="trabajo-title">
          <div className="wrap">
            <DoblePrueba />
            {/* Casos se monta aquí en una tarea posterior */}
          </div>
        </section>
      </main>
    </>
  );
}
