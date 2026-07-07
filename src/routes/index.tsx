import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WA_HOME = "https://wa.me/5562982195886?text=Ol%C3%A1%2C%20quero%20levar%20o%20FDS%20Gourmet%20para%20minha%20cidade.";
const WA_INFO = "https://wa.me/5562982195886?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20FDS%20Gourmet%20Festival.";

const galleryPages = Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(2, "0"));

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const closeNav = () => setNavOpen(false);

  return (
    <div ref={rootRef}>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#topo" aria-label="FDS Gourmet Festival" onClick={closeNav}>
          <span className="brand-mark">FDS</span>
          <span className="brand-text">Gourmet</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`site-nav${navOpen ? " is-open" : ""}`}>
          <a href="#projeto" onClick={closeNav}>Projeto</a>
          <a href="#atrativos" onClick={closeNav}>Atrativos</a>
          <a href="#cidade" onClick={closeNav}>Para cidades</a>
          <a href="#galeria" onClick={closeNav}>Galeria</a>
          <a href="#contato" className="nav-cta" onClick={closeNav}>Contato</a>
        </nav>
      </header>

      <main id="topo">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Apresentação de negócio</p>
            <h1>Leve o FDS Gourmet Festival para sua cidade.</h1>
            <p className="lead">
              Um evento gratuito, familiar e estruturado para movimentar a economia local com
              gastronomia, entretenimento, comércio, cultura e experiências para toda a
              população.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={WA_HOME} target="_blank" rel="noopener">
                Quero levar para minha cidade
              </a>
              <a className="btn btn-secondary" href="/assets/FDS-GOURMET-apresentacao.pdf" target="_blank" rel="noopener">
                Baixar apresentação
              </a>
            </div>
          </div>

          <div className="hero-media reveal delay-1">
            <video
              src="https://growmoneydigital.com.br/conferflow/video.mp4"
              poster="/assets/pages/page-01.webp"
              aria-label="Vídeo de apresentação do FDS Gourmet"
              loop
              playsInline
              controls
            />
          </div>
        </section>

        <section className="metrics section-shell" aria-label="Números do FDS Gourmet">
          <article className="metric-card reveal"><strong>2015</strong><span>ano de criação do projeto</span></article>
          <article className="metric-card reveal delay-1"><strong>500+</strong><span>eventos realizados</span></article>
          <article className="metric-card reveal delay-2"><strong>100+</strong><span>cidades atendidas</span></article>
          <article className="metric-card reveal delay-3"><strong>1M+</strong><span>público estimado</span></article>
        </section>

        <section id="projeto" className="split-section section-shell">
          <div className="section-copy reveal">
            <p className="eyebrow">Projeto FDS Gourmet</p>
            <h2>Um festival criado para unir gastronomia, comércio local e lazer familiar.</h2>
            <p>O FDS Gourmet, também conhecido como Fim de Semana Gourmet, nasceu em 2015 e já percorreu estados como Goiás, Minas Gerais, Mato Grosso, Tocantins e Maranhão.</p>
            <p>A proposta é oferecer uma estrutura completa para restaurantes, comércio varejista, empreendedores e comunidade participarem de um evento de alto impacto local.</p>
          </div>
          <div className="visual-card reveal delay-1">
            <img src="/assets/pages/page-02.webp" alt="Resumo do Projeto FDS Gourmet Tour Brasil" loading="lazy" />
          </div>
        </section>

        <section id="atrativos" className="feature-section">
          <div className="section-shell center reveal">
            <p className="eyebrow">Atrativos do festival</p>
            <h2>5 experiências em um só evento.</h2>
            <p className="section-lead">
              O formato reúne alimentação, bebidas, música, diversão infantil e exposição
              automotiva em uma estrutura pensada para toda a família.
            </p>
          </div>

          <div className="feature-grid section-shell">
            <article className="feature-card reveal">
              <span className="feature-number">01</span>
              <h3>Praça de alimentação</h3>
              <p>Espaço gastronômico com empresas locais, fortalecendo restaurantes e empreendedores da cidade.</p>
            </article>
            <article className="feature-card reveal delay-1">
              <span className="feature-number">02</span>
              <h3>Bar central</h3>
              <p>Bebidas variadas e festival de cerveja artesanal para ampliar o mix de consumo do evento.</p>
            </article>
            <article className="feature-card reveal delay-2">
              <span className="feature-number">03</span>
              <h3>Shows e cultura</h3>
              <p>Apresentações de artistas locais e bandas nacionais, conforme logística e disponibilidade.</p>
            </article>
            <article className="feature-card reveal">
              <span className="feature-number">04</span>
              <h3>Espaço kids</h3>
              <p>Área dedicada às crianças, tornando o festival uma opção de lazer para pais, filhos e famílias.</p>
            </article>
            <article className="feature-card feature-card-wide reveal delay-1">
              <span className="feature-number">05</span>
              <h3>Exposição automotiva</h3>
              <p>Carros antigos, super máquinas, motos e atrações visuais que aumentam o fluxo de visitantes.</p>
            </article>
          </div>
        </section>

        <section className="family-section section-shell">
          <div className="phone-gallery reveal">
            <img src="/assets/pages/page-04.webp" alt="Festival para incluir toda família" loading="lazy" />
          </div>
          <div className="section-copy reveal delay-1">
            <p className="eyebrow">Evento para todos</p>
            <h2>Festival para incluir toda a família.</h2>
            <p>O modelo combina áreas de alimentação, bares e espaço kids, criando uma experiência completa para diferentes perfis de público.</p>
            <ul className="check-list">
              <li>Ambiente familiar e gratuito.</li>
              <li>Participação de empresas locais.</li>
              <li>Programação com entretenimento e atrações culturais.</li>
            </ul>
          </div>
        </section>

        <section className="differential-section">
          <div className="section-shell split-section reverse">
            <div className="section-copy reveal">
              <p className="eyebrow">Diferenciais</p>
              <h2>Um evento pensado para gerar movimento real.</h2>
              <p>O FDS Gourmet Festival foi estruturado com pontos fortes que aumentam o impacto para a cidade, para os empresários participantes e para o público.</p>
              <div className="benefit-list">
                <span>Evento 100% gratuito para a população</span>
                <span>Treinamento e capacitação dos empresários</span>
                <span>Premiação para o melhor prato do festival</span>
                <span>Junção de gastronomia, shows, exposições e cultura</span>
              </div>
            </div>
            <div className="visual-card reveal delay-1">
              <img src="/assets/pages/page-05.webp" alt="Diferenciais do evento FDS Gourmet Festival" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="cidade" className="city-section section-shell">
          <div className="section-copy reveal">
            <p className="eyebrow">Contrapartida para a cidade</p>
            <h2>Por que levar o evento para sua cidade?</h2>
            <p>Além da atração para toda a população, o festival ajuda a ativar a cadeia produtiva local, com impacto em alimentação, hotelaria, beleza, supermercados, vestuário, logística e serviços.</p>
          </div>

          <div className="city-grid">
            <article className="city-card reveal">
              <h3>Economia local</h3>
              <p>Participação de comerciantes da própria cidade e aquecimento de negócios locais.</p>
            </article>
            <article className="city-card reveal delay-1">
              <h3>Empregos diretos e indiretos</h3>
              <p>Movimentação de equipe, fornecedores, montagem, atendimento e prestação de serviços.</p>
            </article>
            <article className="city-card reveal delay-2">
              <h3>Divulgação ampla</h3>
              <p>Presença em redes sociais, imprensa, rádio, TV e canais de comunicação parceiros.</p>
            </article>
            <article className="city-card reveal delay-3">
              <h3>Atração familiar</h3>
              <p>Evento de qualidade para uma população carente de opções de lazer abertas e acessíveis.</p>
            </article>
          </div>
        </section>

        <section className="media-section section-shell">
          <div className="section-copy reveal">
            <p className="eyebrow">Mídia e reportagens</p>
            <h2>Presença em diferentes canais de divulgação.</h2>
            <p>As edições do FDS Gourmet já tiveram parcerias e cobertura em TV, rádio, jornal, redes sociais e portais de notícias.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/fdsgourmetbrasil" target="_blank" rel="noopener">@fdsgourmetbrasil</a>
              <a href="https://www.fdsgourmet.com.br" target="_blank" rel="noopener">www.fdsgourmet.com.br</a>
            </div>
          </div>

          <div className="video-cards reveal delay-1">
            <a className="video-card" href="#" aria-label="Edição Araxá MG">Edição Araxá - MG</a>
            <a className="video-card" href="#" aria-label="Goiânia Buriti Shopping">Goiânia - Buriti Shopping</a>
            <a className="video-card" href="#" aria-label="Brasil Park Shopping">Brasil Park Shopping</a>
            <a className="video-card" href="#" aria-label="Uberaba Shopping">Uberaba Shopping</a>
            <a className="video-card" href="#" aria-label="Centro Cultural Oscar Niemeyer">Centro Cultural Oscar Niemeyer</a>
          </div>
        </section>

        <section id="galeria" className="gallery-section">
          <div className="section-shell center reveal">
            <p className="eyebrow">Galeria do projeto</p>
            <h2>Imagens e páginas da apresentação.</h2>
            <p className="section-lead">Clique em qualquer imagem para ampliar. A galeria utiliza as páginas da apresentação como material visual da landing page.</p>
          </div>

          <div className="gallery-grid section-shell">
            {galleryPages.map((n) => {
              const full = `/assets/pages/page-${n}.webp`;
              const thumb = `/assets/thumbs/page-${n}.webp`;
              const alt = `Página ${Number(n)} da apresentação FDS Gourmet`;
              return (
                <button
                  key={n}
                  className="gallery-item reveal"
                  type="button"
                  onClick={() => setLightbox({ src: full, alt })}
                >
                  <img src={thumb} alt={alt} loading="lazy" />
                </button>
              );
            })}
          </div>
        </section>

        <section id="contato" className="contact-section section-shell">
          <div className="contact-card reveal">
            <p className="eyebrow">Informações</p>
            <h2>Fale com a organização.</h2>
            <p>Entre em contato para apresentar o projeto à sua cidade, avaliar estrutura, agenda, contrapartidas e formato ideal de implantação.</p>
            <div className="contact-list">
              <a href="tel:+5562982195886"><strong>Alexandre Camargo</strong><span>(62) 98219-5886</span></a>
              <a href="mailto:fdsgourmetbrasil@gmail.com"><strong>E-mail</strong><span>fdsgourmetbrasil@gmail.com</span></a>
              <a href="https://www.fdsgourmet.com.br" target="_blank" rel="noopener"><strong>Site</strong><span>www.fdsgourmet.com.br</span></a>
            </div>
            <a className="btn btn-primary full" href={WA_INFO} target="_blank" rel="noopener">
              Chamar no WhatsApp
            </a>
          </div>
          <div className="contact-image reveal delay-1">
            <img src="/assets/pages/page-20.webp" alt="Informações de contato FDS Gourmet" loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>FDS Gourmet Festival - Gastronomia, entretenimento e comércio local.</p>
        <a href="#topo">Voltar ao topo</a>
      </footer>

      <div
        className={`lightbox${lightbox ? " is-open" : ""}`}
        aria-hidden={!lightbox}
        role="dialog"
        aria-label="Imagem ampliada"
        onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
      >
        <button type="button" className="lightbox-close" aria-label="Fechar imagem" onClick={() => setLightbox(null)}>×</button>
        <img src={lightbox?.src ?? ""} alt={lightbox?.alt ?? ""} />
      </div>
    </div>
  );
}
