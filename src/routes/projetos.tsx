import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Atelier" },
      { name: "description", content: "Projetos em andamento e colaborações do atelier." },
      { property: "og:title", content: "Projetos — Atelier" },
      { property: "og:description", content: "Projetos em andamento e colaborações do atelier." },
    ],
  }),
  component: Projetos,
});

type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  year: string;
  cover?: string;
};

const projects: Project[] = [
  {
    slug: "aquarelauto",
    number: "01",
    title: "Aquarelauto",
    tagline: "Aquarela em movimento",
    description:
      "Série dedicada a registrar automóveis clássicos e contemporâneos em aquarela, explorando luz, reflexos e a memória afetiva sobre rodas.",
    status: "Em curso",
    year: "2025—",
  },
  {
    slug: "urban-sketcher",
    number: "02",
    title: "Urban Sketcher",
    tagline: "A cidade desenhada in loco",
    description:
      "Registros urbanos feitos a céu aberto: praças, ruas, fachadas e cenas cotidianas capturadas com caneta e aquarela direto no caderno.",
    status: "Contínuo",
    year: "2023—",
  },
  {
    slug: "ad-astra",
    number: "03",
    title: "Ad Astra",
    tagline: "Em direção às estrelas",
    description:
      "Projeto pessoal que investiga o céu noturno, constelações e o imaginário cósmico através de aquarelas em fundos profundos.",
    status: "Em desenvolvimento",
    year: "2026",
  },
  {
    slug: "cronicas",
    number: "04",
    title: "Crônicas",
    tagline: "Pequenas histórias ilustradas",
    description:
      "Coletânea de cenas, personagens e instantes do dia a dia narrados em texto curto e ilustração — uma crônica visual semanal.",
    status: "Publicação semanal",
    year: "2025—",
  },
  {
    slug: "caderno-de-viagem",
    number: "05",
    title: "Caderno de Viagem",
    tagline: "Registros de quem passa",
    description:
      "Cadernos artesanais preenchidos durante viagens, reunindo aquarelas, anotações, bilhetes e memórias dos lugares visitados.",
    status: "Em curso",
    year: "2024—",
  },
];

function Projetos() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow text-muted-foreground">Em curso</p>
            <h1 className="text-display mt-4 text-6xl md:text-8xl">Projetos.</h1>
          </div>
          <p className="md:col-span-5 self-end text-lg text-ink-soft">
            Séries de longo prazo, investigações pessoais e colaborações que
            atravessam aquarela, desenho urbano, escrita e encadernação.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <ul className="flex flex-col">
            {projects.map((p) => (
              <li key={p.slug} className="border-t border-border last:border-b">
                <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                  <div className="md:col-span-1">
                    <span className="eyebrow text-muted-foreground">{p.number}</span>
                  </div>

                  <div className="md:col-span-6">
                    <h2 className="text-display text-3xl md:text-5xl">{p.title}</h2>
                    <p className="eyebrow mt-3 text-muted-foreground">{p.tagline}</p>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-6">
                    <p className="text-base text-ink-soft md:text-lg">{p.description}</p>
                    <div className="flex items-center justify-between gap-6 border-t border-border pt-4">
                      <span className="eyebrow text-ink">{p.status}</span>
                      <span className="eyebrow text-muted-foreground">{p.year}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="eyebrow inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
                      >
                        Ver projeto <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
