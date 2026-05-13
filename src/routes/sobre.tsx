import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Atelier" },
      { name: "description", content: "Sobre o atelier: urban sketcher, aquarelista, encadernadora e fotógrafa." },
      { property: "og:title", content: "Sobre — Atelier" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-between px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow text-muted-foreground">Sobre</p>
            <div className="my-12">
              <h1 className="text-display text-6xl md:text-8xl">
                Mãos<br />que<br /><span className="italic font-light">contam.</span>
              </h1>
              <div className="mt-10 max-w-lg space-y-6 text-base text-ink-soft md:text-lg">
                <p>
                  Sou ilustradora, urban sketcher, encadernadora e fotógrafa.
                  Trabalho devagar, em pequena escala, e quase sempre com papel
                  e linha entre os dedos.
                </p>
                <p>
                  O atelier nasceu de cadernos de viagem — primeiro para guardar
                  ruas, depois para guardar pessoas, e por fim para guardar o
                  próprio gesto de olhar.
                </p>
                <p>
                  Aceito comissões de aquarela, encadernação por encomenda e
                  pequenas séries fotográficas. Todo o trabalho é feito à mão,
                  na minha mesa, sem pressa.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["12", "anos desenhando"],
                ["80+", "cadernos costurados"],
                ["4", "cidades retratadas"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-display text-4xl md:text-5xl">{n}</p>
                  <p className="eyebrow mt-2 text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative border-t border-border lg:border-l lg:border-t-0">
            <img src={portrait} alt="Mãos sobre um caderno encadernado" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-muted-foreground">Linha do tempo</p>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {[
              ["2014", "Primeiro caderno preenchido em uma viagem a Porto."],
              ["2018", "Início do trabalho com encadernação artesanal."],
              ["2021", "Primeira exposição coletiva de urban sketching."],
              ["2024", "Série fotográfica em filme P&B publicada em revista independente."],
            ].map(([year, text]) => (
              <div key={year} className="bg-background p-8 md:p-10">
                <p className="text-display text-3xl">{year}</p>
                <p className="mt-3 text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
