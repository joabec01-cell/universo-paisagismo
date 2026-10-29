import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PortfolioItemCard } from "@/components/PortfolioItemCard";
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
      <section className="border-b border-line py-10 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Portfólio
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-[1.85rem] tracking-tight text-ink sm:text-4xl md:text-6xl md:leading-[1.05]">
              Trabalhos selecionados
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
              Uma amostra de escala, clima e tipologia. Fotos de campo e estudos 3D integram
              o mesmo processo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
            {portfolioItems.map((item, i) => (
              <Reveal key={item.slug} delayMs={(i % 4) * 50}>
                <PortfolioItemCard item={item} />
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
