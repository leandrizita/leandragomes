import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projetos/")({
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
                      <Link
                        to="/projetos/$slug"
                        params={{ slug: p.slug }}
                        className="eyebrow inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
                      >
                        Ver projeto <span aria-hidden>→</span>
                      </Link>
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
