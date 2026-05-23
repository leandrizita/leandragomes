export type Work = {
  title: string;
  technique: string;
  dimensions: string;
  year: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: string;
  year: string;
  works: Work[];
};

// Default placeholder for any unfilled slot
const placeholderWorks = (count: number, defaultYear: string): Work[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Sem título nº ${i + 1}`,
    technique: "Aquarela sobre papel de algodão",
    dimensions: "30 × 40 cm",
    year: defaultYear,
  }));

export const projects: Project[] = [
  {
    slug: "aquarelauto",
    number: "01",
    title: "Aquarelauto",
    tagline: "Aquarela em movimento",
    description:
      "Série dedicada a registrar automóveis clássicos e contemporâneos em aquarela, explorando luz, reflexos e a memória afetiva sobre rodas.",
    longDescription:
      "Aquarelauto reúne estudos de carrocerias, faróis e reflexos pintados em aquarela sobre papel de algodão. Cada peça nasce da observação de encontros de colecionadores, garagens e ruas, transformando o objeto industrial em retrato afetivo.",
    status: "Em curso",
    year: "2025—",
    works: placeholderWorks(10, "2025"),
  },
  {
    slug: "urban-sketcher",
    number: "02",
    title: "Urban Sketcher",
    tagline: "A cidade desenhada in loco",
    description:
      "Registros urbanos feitos a céu aberto: praças, ruas, fachadas e cenas cotidianas capturadas com caneta e aquarela direto no caderno.",
    longDescription:
      "Projeto contínuo de desenho urbano realizado em campo, com caneta nanquim e aquarela. Reúne arquitetura, pessoas e atmosferas de cidades brasileiras e estrangeiras, organizado por cadernos e encontros do Urban Sketchers.",
    status: "Contínuo",
    year: "2023—",
    works: placeholderWorks(10, "2024"),
  },
  {
    slug: "ad-astra",
    number: "03",
    title: "Ad Astra",
    tagline: "Em direção às estrelas",
    description:
      "Projeto pessoal que investiga o céu noturno, constelações e o imaginário cósmico através de aquarelas em fundos profundos.",
    longDescription:
      "Ad Astra explora a relação entre o gesto da aquarela e a vastidão do cosmos. As peças combinam técnicas de molhado-sobre-molhado, salpicos e veladuras para construir nebulosas, constelações e horizontes noturnos.",
    status: "Em desenvolvimento",
    year: "2026",
    works: placeholderWorks(10, "2026"),
  },
  {
    slug: "cronicas",
    number: "04",
    title: "Crônicas",
    tagline: "Pequenas histórias ilustradas",
    description:
      "Coletânea de cenas, personagens e instantes do dia a dia narrados em texto curto e ilustração — uma crônica visual semanal.",
    longDescription:
      "Crônicas é um diário ilustrado publicado semanalmente. Cada edição combina um texto breve com uma ilustração em aquarela ou nanquim, registrando observações sobre cidade, afetos, leituras e travessias cotidianas.",
    status: "Publicação semanal",
    year: "2025—",
    works: placeholderWorks(10, "2025"),
  },
  {
    slug: "caderno-de-viagem",
    number: "05",
    title: "Caderno de Viagem",
    tagline: "Registros de quem passa",
    description:
      "Cadernos artesanais preenchidos durante viagens, reunindo aquarelas, anotações, bilhetes e memórias dos lugares visitados.",
    longDescription:
      "Cada Caderno de Viagem é um objeto único, encadernado à mão, preenchido em rota com aquarelas, croquis, anotações e colagens. Os cadernos funcionam como mapa afetivo dos lugares visitados e das pessoas encontradas.",
    status: "Em curso",
    year: "2024—",
    works: placeholderWorks(10, "2024"),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
