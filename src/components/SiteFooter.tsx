import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-display text-3xl">Atelier</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Aquarela, ilustração urbana, encadernação artesanal e fotografia analógica.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Navegar</p>
          <ul className="mt-4 space-y-2">
            {[
              { to: "/trabalhos" as const, label: "Trabalhos" },
              { to: "/sobre" as const, label: "Sobre" },
              { to: "/contato" as const, label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm hover:underline underline-offset-4">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Onde encontrar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Instagram — @atelier</li>
            <li>Behance — /atelier</li>
            <li>Brasília — Curitiba</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
          <p className="eyebrow text-muted-foreground">© {new Date().getFullYear()} Atelier</p>
          <p className="eyebrow text-muted-foreground">Feito à mão</p>
        </div>
      </div>
    </footer>
  );
}
