import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Atelier" },
      { name: "description", content: "Reflexões, processos e histórias por trás das aquarelas, encadernações e desenhos urbanos." },
      { property: "og:title", content: "Blog — Atelier" },
      { property: "og:description", content: "Reflexões, processos e histórias por trás das aquarelas, encadernações e desenhos urbanos." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow text-muted-foreground">Reflexões</p>
            <h1 className="text-display mt-4 text-6xl md:text-8xl">Blog.</h1>
          </div>
          <p className="md:col-span-5 self-end text-lg text-ink-soft">
            Histórias por trás das obras, processos criativos, observações de
            viagem e notas de um atelier em constante movimento.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow text-muted-foreground">Em breve</p>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Os primeiros posts estão sendo escritos. Em breve, novos conteúdos
            sobre aquarela, urban sketching e encadernação artesanal.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
