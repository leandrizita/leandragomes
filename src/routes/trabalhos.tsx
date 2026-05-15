import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import w1 from "@/assets/work-1-new.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4-new.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";
import w9 from "@/assets/work-9.jpg";
import w10 from "@/assets/work-10.jpg";
import w11 from "@/assets/work-11.jpg";
import w12 from "@/assets/work-12.jpg";
import hero from "@/assets/hero-sketch.jpg";

export const Route = createFileRoute("/trabalhos")({
  head: () => ({
    meta: [
      { title: "Trabalhos — Atelier" },
      { name: "description", content: "Aquarelas, urban sketches, encadernação artesanal e fotografia analógica." },
      { property: "og:title", content: "Trabalhos — Atelier" },
      { property: "og:image", content: w1 },
    ],
  }),
  component: Trabalhos,
});

const works = [
  { src: hero, title: "Esquina do café", year: "2023", tag: "Aquarela", span: "md:col-span-7" },
  { src: w1, title: "Museu Oscar Niemeyer - Encontro USK Brasil| Sul - Curitiba", year: "2023", tag: "Aquarela", span: "md:col-span-5" },
  { src: w4, title: "​Estação Central de metrô - Brasília/DF", year: "2023", tag: "AQUARELA E NANQUIM", span: "md:col-span-5" },
  { src: w2, title: "Caderno em couro nº 9", year: "2025", tag: "Encadernação", span: "md:col-span-7" },
  { src: w3, title: "Beco silencioso", year: "2025", tag: "Filme 35mm", span: "md:col-span-12" },
  { src: w5, title: "Fórmula clássica", year: "2023", tag: "Aquarela", span: "md:col-span-6" },
  { src: w6, title: "Paisagem em camadas", year: "2023", tag: "Aquarela", span: "md:col-span-6" },
  { src: w7, title: "Jardim Botânico de Curitiba", year: "2023", tag: "Aquarela", span: "md:col-span-5" },
  { src: w11, title: "Estufa e visitantes", year: "2023", tag: "Aquarela", span: "md:col-span-7" },
  { src: w8, title: "Caderno de campo — Fusca", year: "2025", tag: "Urban Sketch", span: "md:col-span-7" },
  { src: w9, title: "Varal noturno", year: "2023", tag: "Aquarela", span: "md:col-span-5" },
  { src: w10, title: "Heroína em vermelho", year: "2023", tag: "Aquarela", span: "md:col-span-6" },
  { src: w12, title: "Ferrari F1", year: "2023", tag: "Aquarela e Nanquim", span: "md:col-span-6" },
];

function Trabalhos() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <p className="eyebrow text-muted-foreground">Arquivo</p>
            <h1 className="text-display mt-4 text-6xl md:text-8xl">Trabalhos<br />selecionados.</h1>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-lg text-ink-soft">
            Uma seleção rotativa de aquarelas, encadernações e fotografias.
            Tudo feito à mão, em pequena escala. Algumas peças estão à venda;
            outras vivem apenas no caderno.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {works.map((w) => (
              <figure key={w.title} className={`group ${w.span ?? "md:col-span-6"}`}>
                <div className="overflow-hidden border border-border bg-secondary">
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  <span className="text-base md:text-lg">{w.title}</span>
                  <span className="eyebrow text-muted-foreground">{w.tag} · {w.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
