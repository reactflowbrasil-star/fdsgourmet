import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aerialImg from "@/assets/aerial-event.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Projeto — FDS Gourmet Festival" },
      { name: "description", content: "Desde 2015 percorrendo o Brasil: mais de 500 edições, 100 cidades e 1 milhão de pessoas impactadas." },
      { property: "og:title", content: "O Projeto FDS Gourmet" },
      { property: "og:description", content: "Um festival gastronômico que movimenta a economia local e reúne a comunidade." },
    ],
  }),
  component: Sobre,
});

const differentials = [
  "Movimenta a economia local — apenas empresas da cidade participam",
  "Evento 100% gratuito, com acesso a toda a população",
  "5 eventos em 1: gastronomia, shows, exposições, motos e cultura",
  "Treinamento e capacitação para empresários locais",
  "Premiação para o melhor prato do festival",
  "Espaço kids seguro e divertido para as crianças",
];

function Sobre() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          O Projeto
        </span>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-black leading-tight sm:text-6xl">
          Uma jornada de sabor pelo{" "}
          <span className="text-gradient-ember">Brasil desde 2015</span>.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          O projeto FDS GOURMET (Fim de Semana Gourmet) nasceu em 2015 e, de lá para cá,
          já realizou mais de 500 eventos em mais de 100 cidades de 5 Estados brasileiros:
          Goiás, Minas Gerais, Mato Grosso, Tocantins e Maranhão — reunindo um público
          estimado em mais de 1 milhão de pessoas. Para 2024, chegamos com uma proposta
          diferenciada: a participação ativa do comércio local, restaurantes e toda a
          comunidade que queira fazer parte do evento.
        </p>
      </section>

      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={aerialImg}
            alt="Vista aérea de festival ao ar livre"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Diferenciais do <span className="text-gradient-ember">evento</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            O FDS Gourmet Festival é totalmente diferenciado. Conheça os pontos fortes
            que fazem do nosso projeto uma referência nacional.
          </p>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {differentials.map((d) => (
              <li
                key={d}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ember text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="min-w-0 text-sm leading-relaxed text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          Por que levar para <span className="text-gradient-ember">sua cidade</span>?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", t: "Evento nacional", d: "Reconhecido em todo o país, incentivando o comércio local." },
            { n: "02", t: "100% gratuito", d: "Acesso livre para toda a população da cidade." },
            { n: "03", t: "Organização completa", d: "Stands, logística e estrutura por nossa conta." },
            { n: "04", t: "Cadeia produtiva", d: "Hotelaria, salões, mercados e comércios se beneficiam." },
            { n: "05", t: "Ampla divulgação", d: "TV, rádio, jornais e redes sociais dão suporte ao evento." },
            { n: "06", t: "Geração de empregos", d: "Postos diretos e indiretos criados na comunidade." },
          ].map((c) => (
            <article key={c.n} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <div className="font-display text-4xl font-black text-primary/60">{c.n}</div>
              <h3 className="mt-3 font-display text-xl font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
