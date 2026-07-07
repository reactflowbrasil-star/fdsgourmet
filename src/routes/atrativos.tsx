import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed, Beer, Music, Baby, Car } from "lucide-react";
import grillImg from "@/assets/food-grill.jpg";
import beerImg from "@/assets/craft-beer.jpg";
import bandImg from "@/assets/live-band.jpg";
import kidsImg from "@/assets/kids-space.jpg";
import carsImg from "@/assets/vintage-cars.jpg";

export const Route = createFileRoute("/atrativos")({
  head: () => ({
    meta: [
      { title: "Atrativos — FDS Gourmet Festival" },
      { name: "description", content: "Praça de alimentação, cerveja artesanal, shows, espaço kids e exposição de carros antigos e motos." },
      { property: "og:title", content: "Atrativos do FDS Gourmet" },
      { property: "og:description", content: "5 experiências em um só festival, para toda a família." },
    ],
  }),
  component: Atrativos,
});

const items = [
  {
    icon: UtensilsCrossed,
    n: "01",
    title: "Praça de alimentação",
    desc: "Empresas locais servindo o melhor da gastronomia da região, com espaço para todos os paladares.",
    img: grillImg,
  },
  {
    icon: Beer,
    n: "02",
    title: "Bar central & cervejas",
    desc: "Bar completo com bebidas variadas e um festival dedicado às melhores cervejas artesanais.",
    img: beerImg,
  },
  {
    icon: Music,
    n: "03",
    title: "Shows & artistas",
    desc: "Apresentações de artistas locais e bandas nacionais em um palco preparado para o público.",
    img: bandImg,
  },
  {
    icon: Baby,
    n: "04",
    title: "Espaço kids",
    desc: "Um espaço seguro e cheio de diversão para as crianças aproveitarem enquanto a família curte.",
    img: kidsImg,
  },
  {
    icon: Car,
    n: "05",
    title: "Carros antigos, super máquinas & motos",
    desc: "Exposição imperdível para os apaixonados por veículos clássicos, superesportivos e motocicletas.",
    img: carsImg,
  },
];

function Atrativos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
        O que você vai encontrar
      </span>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-black leading-tight sm:text-6xl">
        Cinco experiências, <span className="text-gradient-ember">um só festival</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Cada edição do FDS Gourmet é pensada para incluir toda a família. Conheça os
        pilares que fazem do festival um evento inesquecível.
      </p>

      <div className="mt-16 space-y-16">
        {items.map((it, i) => (
          <article
            key={it.n}
            className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-ember text-primary-foreground shadow-glow">
                  <it.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl font-black text-primary/40">{it.n}</span>
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">{it.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
