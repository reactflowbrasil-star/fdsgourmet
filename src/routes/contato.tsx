import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Globe, Instagram, User } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — FDS Gourmet Festival" },
      { name: "description", content: "Fale conosco para levar o FDS Gourmet Festival para a sua cidade." },
      { property: "og:title", content: "Contato FDS Gourmet" },
      { property: "og:description", content: "Leve o festival para sua cidade. Fale com Alexandre Camargo." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vamos conversar
          </span>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight sm:text-6xl">
            Leve o FDS Gourmet <span className="text-gradient-ember">para sua cidade</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Fale com nossa equipe para conhecer as possibilidades de parceria e transformar
            um fim de semana comum em um evento inesquecível para a sua comunidade.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+5562982195886" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-ember text-primary-foreground">
                <User className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Responsável</p>
                <p className="mt-1 font-display text-xl font-bold">Alexandre Camargo</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-primary"><Phone className="h-3.5 w-3.5" /> (62) 98219-5886</p>
              </div>
            </a>

            <a href="mailto:fdsgourmetbrasil@gmail.com" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-ember text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</p>
                <p className="mt-1 truncate font-display text-xl font-bold">fdsgourmetbrasil@gmail.com</p>
              </div>
            </a>

            <div className="grid gap-5 sm:grid-cols-2">
              <a href="https://www.fdsgourmet.com.br" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                <Globe className="h-5 w-5 text-primary" />
                <span className="min-w-0 truncate text-sm">fdsgourmet.com.br</span>
              </a>
              <a href="https://instagram.com/fdsgourmetbrasil" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="min-w-0 truncate text-sm">@fdsgourmetbrasil</span>
              </a>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = encodeURIComponent(
              `Nome: ${data.get("nome")}\nCidade: ${data.get("cidade")}\nTelefone: ${data.get("telefone")}\n\n${data.get("mensagem")}`,
            );
            window.location.href = `mailto:fdsgourmetbrasil@gmail.com?subject=Contato%20FDS%20Gourmet&body=${body}`;
          }}
        >
          <h2 className="font-display text-2xl font-bold">Envie uma mensagem</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha o formulário e retornaremos em breve.
          </p>

          <div className="mt-6 space-y-4">
            {[
              { name: "nome", label: "Seu nome", type: "text" },
              { name: "cidade", label: "Cidade / Estado", type: "text" },
              { name: "telefone", label: "Telefone / WhatsApp", type: "tel" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </span>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Mensagem
              </span>
              <textarea
                required
                name="mensagem"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-ember px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
