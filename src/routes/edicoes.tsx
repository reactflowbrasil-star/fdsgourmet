import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-festival.jpg";
import aerialImg from "@/assets/aerial-event.jpg";
import carsImg from "@/assets/vintage-cars.jpg";
import bandImg from "@/assets/live-band.jpg";
import kidsImg from "@/assets/kids-space.jpg";
import beerImg from "@/assets/craft-beer.jpg";
import grillImg from "@/assets/food-grill.jpg";

export const Route = createFileRoute("/edicoes")({
  head: () => ({
    meta: [
      { title: "Edições — FDS Gourmet Festival" },
      { name: "description", content: "Registros das edições do FDS Gourmet em Goiânia, Araxá, Uberaba, Rio Verde e muito mais." },
      { property: "og:title", content: "Edições do FDS Gourmet" },
      { property: "og:description", content: "Mais de 500 eventos, 100 cidades e 5 estados brasileiros." },
    ],
  }),
  component: Edicoes,
});

const editions = [
  { city: "Goiânia", state: "GO", venue: "Centro Cultural Oscar Niemeyer", year: "2022", img: heroImg },
  { city: "Goiânia", state: "GO", venue: "Buriti Shopping", year: "2023", img: aerialImg },
  { city: "Araxá", state: "MG", venue: "Praça Central", year: "2022", img: bandImg },
  { city: "Uberaba", state: "MG", venue: "Uberaba Shopping", year: "2023", img: carsImg },
  { city: "Rio Verde", state: "GO", venue: "Parque de Eventos", year: "2023", img: kidsImg },
  { city: "Brasília", state: "DF", venue: "Brasil Park Shopping", year: "2023", img: beerImg },
  { city: "Cuiabá", state: "MT", venue: "Praça de Alimentação", year: "2023", img: grillImg },
  { city: "Palmas", state: "TO", venue: "Centro da cidade", year: "2023", img: aerialImg },
];

function Edicoes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
        Galeria
      </span>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-black leading-tight sm:text-6xl">
        Onde o FDS Gourmet já <span className="text-gradient-ember">brilhou</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Cada cidade, uma edição única. Reunimos aqui alguns dos momentos que marcaram a
        história do nosso festival por todo o Brasil.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {editions.map((e, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={e.img}
                alt={`Edição ${e.city} - ${e.venue}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <MapPin className="h-3.5 w-3.5" /> {e.state} · {e.year}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-cream">
                {e.city}
              </h3>
              <p className="mt-1 text-sm text-cream/70">{e.venue}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-primary/30 bg-card p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Cobertura de mídia</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Presença em TV, rádio, jornais e redes sociais.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Praticamente todas as nossas edições contam com parcerias de grandes veículos
          de comunicação. Busque por "FDS Gourmet" no Google e veja reportagens do festival.
        </p>
      </div>
    </section>
  );
}
