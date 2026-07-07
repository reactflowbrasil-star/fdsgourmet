import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div style={{ padding: 80, textAlign: "center" }}>
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <a href="/" className="btn btn-primary">Voltar</a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div style={{ padding: 80, textAlign: "center" }}>
      <h1>Ops</h1>
      <p>Algo deu errado.</p>
      <button className="btn btn-primary" onClick={() => { router.invalidate(); reset(); }}>
        Tentar de novo
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FDS Gourmet Festival | Evento gastronômico para cidades" },
      { name: "description", content: "Landing page do FDS Gourmet Festival: evento gratuito para toda a família, com gastronomia, shows, espaço kids, bares, cerveja artesanal, exposição de carros e valorização do comércio local." },
      { name: "keywords", content: "FDS Gourmet, festival gastronômico, evento gourmet, praça de alimentação, comércio local, food trucks, festival familiar" },
      { name: "author", content: "FDS Gourmet Brasil" },
      { property: "og:title", content: "FDS Gourmet Festival" },
      { property: "og:description", content: "Leve um festival gastronômico, gratuito e familiar para sua cidade." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/assets/pages/page-01.webp" },
      { name: "theme-color", content: "#008b96" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
