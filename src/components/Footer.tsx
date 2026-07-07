import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-ember text-sm font-black text-primary-foreground">
              FDS
            </span>
            <span className="font-display text-xl font-bold">
              Gourmet<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Fim de Semana Gourmet — festival itinerante que movimenta a economia local,
            reúne a família e celebra a gastronomia brasileira desde 2015.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-foreground">O Projeto</Link></li>
            <li><Link to="/atrativos" className="hover:text-foreground">Atrativos</Link></li>
            <li><Link to="/edicoes" className="hover:text-foreground">Edições</Link></li>
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (62) 98219-5886</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> fdsgourmetbrasil@gmail.com</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> www.fdsgourmet.com.br</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> @fdsgourmetbrasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FDS Gourmet Festival — Todos os direitos reservados.
      </div>
    </footer>
  );
}
