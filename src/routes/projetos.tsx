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
            Uma página dedicada aos projetos em andamento, colaborações e
            séries de longo prazo. Em breve, novos conteúdos por aqui.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow text-muted-foreground">Em breve</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
