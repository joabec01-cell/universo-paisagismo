import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PortfolioFigure } from "@/components/PortfolioFigure";
import { portfolioItems } from "@/lib/portfolio";
import { WHATSAPP_ORCAMENTO_URL } from "@/lib/contato";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Projetos de paisagismo, execução e consultoria realizados pela Universo Paisagismo.",
};

export default function PortfolioPage() {
  return (
    <div className="border-b border-line">
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Portfólio
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              Trabalhos selecionados
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Uma amostra de escala, clima e tipologia. Fotos de campo e estudos 3D integram
              o mesmo processo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioItems.map((item, i) => (
              <Reveal key={item.slug} delayMs={(i % 4) * 50}>
                <article className="group flex h-full flex-col border border-line bg-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_12px_36px_rgba(61,111,86,0.12)]">
                  <PortfolioFigure
                    imageSrc={item.imageSrc}
                    alt={`${item.title} — Universo Paisagismo`}
                    className="aspect-[16/11]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <span className="inline-flex w-fit rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                      {item.tag}
                    </span>
                    <h2 className="mt-5 font-serif text-2xl tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <p className="text-sm text-muted">
              Quer ver referências próximas ao seu tipo de imóvel?
            </p>
            <a
              href={WHATSAPP_ORCAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 text-sm font-medium text-ink"
            >
              <i className="bi bi-whatsapp text-base text-[#25D366]" aria-hidden="true" />
              Agendar conversa
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
