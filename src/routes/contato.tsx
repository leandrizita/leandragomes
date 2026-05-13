import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Atelier" },
      { name: "description", content: "Encomende uma aquarela, um caderno encadernado ou um ensaio fotográfico." },
      { property: "og:title", content: "Contato — Atelier" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow text-muted-foreground">Contato</p>
            <h1 className="text-display mt-4 text-6xl md:text-8xl">
              Vamos<br /><span className="italic font-light">conversar.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-ink-soft">
              Encomendas, comissões, exposições ou apenas uma carta sobre papéis
              e tintas — escreva. Respondo em até três dias.
            </p>

            <dl className="mt-12 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="eyebrow text-muted-foreground">E-mail</dt>
                <dd className="mt-1 text-xl"><a href="mailto:artleagee@gmail.com" className="border-b border-ink pb-1">artleagee@gmail.com</a></dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Atelier</dt>
                <dd className="mt-1 text-xl">Quadra 801 - Brasília</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Visitas</dt>
                <dd className="mt-1 text-xl">Com hora marcada · qui e sex</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-border bg-secondary/40 paper-grain px-6 py-20 md:px-10 md:py-28 lg:border-l lg:border-t-0">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                window.location.href = `mailto:artleagee@gmail.com?subject=Encomenda — ${encodeURIComponent(String(data.get("nome")))}&body=${encodeURIComponent(String(data.get("mensagem")))}`;
              }}
            >
              <Field label="Nome" name="nome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Tipo de trabalho" name="tipo" placeholder="Aquarela, encadernação, fotografia…" />
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  required
                  className="mt-2 w-full border-b border-ink bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground focus:border-ink"
                  placeholder="Conte um pouco sobre a ideia…"
                />
              </div>
              <button type="submit" className="eyebrow inline-flex items-center gap-3 bg-ink px-6 py-4 text-paper transition-colors hover:bg-ink-soft">
                Enviar mensagem <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground focus:border-ink"
      />
    </div>
  );
}
