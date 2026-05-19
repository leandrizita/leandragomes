import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Projetos` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.title} — Projetos` },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="text-display mt-4 text-5xl md:text-7xl">Projeto não encontrado.</h1>
        <Link to="/projetos" className="eyebrow mt-8 inline-flex items-center gap-2 text-ink hover:opacity-70">
          ← Voltar para projetos
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
      <p>{error.message}</p>
    </div>
  ),
});

// Image layout spans for visual rhythm across 10 slots
const spans = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-12",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-12",
];

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const slots = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 md:px-10">
          <Link to="/projetos" className="eyebrow text-muted-foreground transition-colors hover:text-ink">
            ← Projetos
          </Link>
        </div>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow text-muted-foreground">
              {project.number} · {project.tagline}
            </p>
            <h1 className="text-display mt-4 text-6xl md:text-8xl">{project.title}.</h1>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 self-end">
            <p className="text-lg text-ink-soft">{project.longDescription}</p>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="eyebrow text-ink">{project.status}</span>
              <span className="eyebrow text-muted-foreground">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 flex items-end justify-between">
            <p className="eyebrow text-muted-foreground">Galeria</p>
            <p className="eyebrow text-muted-foreground">10 obras</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {slots.map((n, i) => (
              <figure
                key={n}
                className={`${spans[i]} flex flex-col gap-3`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-display text-6xl text-muted-foreground/40 md:text-8xl">
                      {String(n).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <figcaption className="flex items-center justify-between">
                  <span className="eyebrow text-ink">Obra {String(n).padStart(2, "0")}</span>
                  <span className="eyebrow text-muted-foreground">Sem título</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
          <div>
            <p className="eyebrow text-muted-foreground">Próximo projeto</p>
            <Link
              to="/projetos/$slug"
              params={{ slug: next.slug }}
              className="text-display mt-3 block text-4xl transition-opacity hover:opacity-70 md:text-6xl"
            >
              {next.title} →
            </Link>
          </div>
          <Link
            to="/projetos"
            className="eyebrow inline-flex items-center gap-2 text-ink hover:opacity-70"
          >
            Ver todos
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
