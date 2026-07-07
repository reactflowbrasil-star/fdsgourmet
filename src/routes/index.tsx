import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Users, Calendar, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-festival.jpg";
import grillImg from "@/assets/food-grill.jpg";
import beerImg from "@/assets/craft-beer.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { icon: Calendar, value: "500+", label: "Edições realizadas" },
  { icon: MapPin, value: "100+", label: "Cidades" },
  { icon: Users, value: "1M+", label: "Público estimado" },
  { icon: Sparkles, value: "5", label: "Estados atendidos" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Festival ao ar livre à noite com luzes e público"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>

        <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tour Brasil 2024
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              Um fim de semana{" "}
              <span className="text-gradient-ember">inesquecível</span> de gastronomia.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              O FDS Gourmet é o festival que reúne o melhor da cozinha local, cerveja
              artesanal, shows e experiências para toda a família — 100% gratuito,
              movimentando a economia da sua cidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Leve para sua cidade
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/edicoes"
                className="rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground hover:bg-card"
              >
                Ver edições anteriores
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-glow">
              <img
                src={grillImg}
                alt="Hambúrguer sendo grelhado com chamas"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-charcoal/80 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-primary">Praça de alimentação</p>
                <p className="mt-1 font-display text-xl font-bold">Sabores da sua cidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start">
              <s.icon className="h-6 w-6 text-primary" />
              <div className="mt-3 font-display text-4xl font-black text-gradient-ember">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              O Projeto
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Nove anos celebrando a gastronomia brasileira.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Criado em 2015, o FDS Gourmet já percorreu Goiás, Minas Gerais, Mato Grosso,
              Tocantins e Maranhão. Para 2024, chega com uma proposta ainda mais especial:
              o protagonismo do comércio local.
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              Conheça o projeto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img
              src={beerImg}
              alt="Cerveja artesanal sendo servida"
              width={1000}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-charcoal p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">
              Pronto para transformar o fim de semana da sua cidade?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Fale com a nossa equipe e leve o FDS Gourmet Festival para o seu município.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-ember px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Quero receber o festival <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
