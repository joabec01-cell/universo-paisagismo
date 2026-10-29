import Link from "next/link";
import Image from "next/image";
import { HeroLandscape3D } from "@/components/HeroLandscape3D";
import { Reveal } from "@/components/Reveal";
import { LazyVideo } from "@/components/LazyVideo";
import { PortfolioFigure } from "@/components/PortfolioFigure";
import { StatsSection } from "@/components/StatsSection";
import { Project3DComparison } from "@/components/Project3DComparison";
import { RecentProjectsSection } from "@/components/RecentProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PlansCTASection } from "@/components/PlansCTASection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { portfolioItems } from "@/lib/portfolio";
import { WHATSAPP_ORCAMENTO_URL } from "@/lib/contato";

const pillars = [
  {
    title: "Atendimento personalizado",
    body: "Cada projeto nasce do seu ritmo, da arquitetura da casa e do uso do espaço.",
    iconClass: "bi bi-sparkles",
  },
  {
    title: "Materiais e plantas selecionados",
    body: "Espécies adequadas ao clima de BH, solo e manutenção que você consegue sustentar.",
    iconClass: "bi bi-flower1",
  },
  {
    title: "Equipe especializada",
    body: "Paisagismo e jardinagem com experiência em obras residenciais e comerciais.",
    iconClass: "bi bi-award",
  },
  {
    title: "Do projeto à manutenção",
    body: "Planejamento, execução e suporte para o jardim evoluir bem nos primeiros meses.",
    iconClass: "bi bi-shield-check",
  },
];

export default function HomePage() {
  const preview = portfolioItems.slice(0, 3);

  return (
    <>
      {/* 1. HERO REFORMULADO (Texto ampliado em +2cm) */}
      <HeroLandscape3D>
        <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 max-w-2xl xl:max-w-3xl">
          {/* Eyebrow com linha decorativa ampliada */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-[#C97832]" aria-hidden="true" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2F6B4F] sm:text-sm md:text-base">
              Belo Horizonte e região
            </p>
          </div>

          {/* Headline com forte presença visual ampliada em +2cm */}
          <h1 className="mt-2.5 sm:mt-3 font-serif text-[1.75rem] leading-[1.1] tracking-tight text-[#173F2A] sm:text-5xl sm:leading-[1.06] md:text-[3.4rem] md:leading-[1.03] lg:text-[3.9rem] xl:text-[4.35rem]">
            Do projeto ao jardim.
            <span className="mt-1 block">
              Veja antes. Viva <span className="font-normal italic text-[#C97832]">depois</span>.
            </span>
          </h1>

          {/* Descrição com tamanho ampliado (+2cm) */}
          <p className="mx-auto mt-3 max-w-[50ch] text-center text-[0.95rem] leading-relaxed text-[#526B45] sm:mt-4 sm:text-lg md:text-xl xl:text-[1.35rem] lg:mx-0 lg:text-left">
            Paisagismo personalizado, visualização 3D e execução profissional para transformar espaços em ambientes únicos.
          </p>

          {/* CTAs Profissionais e Ampliados */}
          <div className="mt-5 sm:mt-6 flex flex-col gap-3.5 sm:flex-row sm:items-center justify-center lg:justify-start w-full">
            {/* CTA Principal → WhatsApp */}
            <a
              href={WHATSAPP_ORCAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-[#2F6B4F] px-7 py-3.5 sm:w-auto sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white shadow-[0_4px_16px_rgba(47,107,79,0.20)] transition-all duration-300 hover:bg-[#C97832] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,120,50,0.30)] active:scale-[0.98]"
            >
              <i className="bi bi-whatsapp text-lg sm:text-xl" aria-hidden="true" />
              <span>Solicitar orçamento</span>
            </a>

            {/* CTA Secundário */}
            <Link
              href="/portfolio"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-[#DDE5DC] bg-transparent px-6 py-3.5 sm:w-auto sm:px-7 sm:py-4 text-base sm:text-lg font-medium text-[#173F2A] transition-all duration-300 hover:border-[#C97832] hover:text-[#C97832] active:scale-[0.98]"
            >
              <i className="bi bi-images text-sm sm:text-base transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span>Ver projetos</span>
            </Link>
          </div>
        </Reveal>
      </HeroLandscape3D>

      {/* 2. SEÇÃO — APRESENTAÇÃO DA UNIVERSO (Editorial / Fundo verde-sálvia claro) */}
      <section className="relative overflow-hidden border-b border-[#E2E8DF] bg-[#F1F4EF] py-16 sm:py-28 lg:py-36">
        {/* Marca d'água sutil da marca no background para sensação arquitetônica premium */}
        <div
          className="pointer-events-none absolute -right-12 -bottom-16 w-[380px] sm:w-[500px] lg:w-[620px] select-none opacity-[0.045] mix-blend-multiply transition-opacity duration-1000"
          aria-hidden="true"
        >
          <Image
            src="/logo/logo verde verde sem fundo.png"
            alt=""
            width={800}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Lado esquerdo: Identificação + Título com detalhe terracota */}
            <div className="lg:col-span-6">
              <Reveal delayMs={0}>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#526B45] font-semibold">
                  SOBRE A UNIVERSO
                </p>
              </Reveal>

              <Reveal delayMs={120}>
                <div className="mt-4 flex items-stretch gap-4 sm:gap-5">
                  <div
                    className="w-[3px] rounded-full bg-[#C97832] shrink-0 self-stretch my-1"
                    aria-hidden="true"
                  />
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-[#0D1F16]">
                    Paisagismo pensado
                    <br className="hidden sm:inline" /> para ser vivido.
                  </h2>
                </div>
              </Reveal>
            </div>

            {/* Lado direito: Parágrafo institucional + Link editorial */}
            <div className="lg:col-span-6 lg:pt-7">
              <Reveal delayMs={220}>
                <p className="text-base sm:text-lg leading-relaxed text-[#445244] font-light max-w-[54ch]">
                  Na Universo Paisagismo, cada projeto nasce da leitura do terreno, da arquitetura e da rotina de quem vai utilizar aquele espaço. Unimos planejamento, conhecimento técnico e execução para criar jardins bonitos, funcionais e possíveis de manter no dia a dia.
                </p>
              </Reveal>

              <Reveal delayMs={340}>
                <div className="mt-8 sm:mt-10">
                  <Link
                    href="/sobre"
                    className="group relative inline-flex items-center gap-2 pb-1 text-base sm:text-lg font-medium text-[#0D1F16] transition-colors duration-300 hover:text-[#C97832]"
                  >
                    <span>Conheça a Universo</span>
                    <i
                      className="bi bi-arrow-right text-base transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#C97832]"
                      aria-hidden="true"
                    />
                    {/* Linha terracota suave animada no hover */}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C97832] transition-all duration-300 ease-out group-hover:w-full"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO — NOSSO PROCESSO / CLAREZA EM CADA ETAPA */}
      <section className="relative border-b border-[#E2E8DF] bg-[#FAF9F5] py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Topo: Eyebrow + Título + Parágrafo */}
          <div className="max-w-3xl">
            <Reveal delayMs={0}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#526B45] font-semibold">
                NOSSO TRABALHO
              </p>
            </Reveal>

            <Reveal delayMs={100}>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D1F16]">
                Clareza em cada etapa
              </h2>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A554A] font-light max-w-[62ch]">
                Do primeiro contato à entrega do jardim, cada etapa é planejada para que você saiba exatamente o que será feito, como será executado e qual resultado esperar.
              </p>
            </Reveal>
          </div>

          {/* Composição: 45% Mídia (Vídeo Processo) / 55% Conteúdo Editorial */}
          <div className="mt-12 lg:mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Coluna Esquerda (~45%): Vídeo Vertical de Processo Real */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <Reveal delayMs={150} className="w-full max-w-[420px]">
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_20px_45px_rgba(13,31,22,0.12)]">
                  {/* Vídeo Vertical Real em Autoplay Loop Muted */}
                  <LazyVideo
                    src="/video rapido 01.mp4"
                    poster="/posters/video-rapido-01.jpg"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Gradientes sutis para contraste refinado dos textos sobrepostos */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/85 via-transparent to-[#0D1F16]/60"
                    aria-hidden="true"
                  />

                  {/* Overlay Superior: NOSSO PROCESSO / Obras reais */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex flex-col items-start gap-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#0D1F16]/75 backdrop-blur-md px-3 py-1 border border-white/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C97832] animate-pulse" aria-hidden="true" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white font-medium">
                        NOSSO PROCESSO
                      </span>
                    </div>
                    <span className="text-[11px] text-white/80 font-light tracking-wide pl-1 drop-shadow-sm">
                      Obras reais • Universo Paisagismo
                    </span>
                  </div>

                  {/* Overlay Inferior: +10 anos de experiência */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#0D1F16]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-white/90 text-xs font-medium shadow-sm">
                      <i className="bi bi-shield-check text-[#C49A63]" aria-hidden="true" />
                      <span>+10 anos de experiência</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Coluna Direita (~55%): Quatro diferenciais em formato editorial numerados 01 - 04 */}
            <div className="lg:col-span-7 divide-y divide-[#E2E8DF] border-y border-[#E2E8DF] order-2">
              {pillars.map((item, i) => {
                const numberFormatted = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={item.title} delayMs={100 + i * 90}>
                    <div className="group relative py-6 sm:py-7 transition-all duration-300">
                      {/* Linha terracota sutil lateral no hover */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C97832] scale-y-0 transition-transform duration-300 origin-center group-hover:scale-y-100"
                        aria-hidden="true"
                      />

                      <div className="pl-0 sm:pl-3 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-sm sm:text-base font-semibold text-[#C97832]">
                            {numberFormatted}
                          </span>
                          <span className="text-[#8A9B7A] font-light text-xs">—</span>
                          <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#0D1F16] transition-colors duration-300 group-hover:text-[#2F6B4F]">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#4A554A] font-light max-w-[56ch] pl-7 sm:pl-8">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO — VISUALIZAÇÃO 3D (Comparador 3D ↔ Real Interativo) */}
      <Project3DComparison />

      {/* 5. SEÇÃO — OBRAS RECENTES (Composição Editorial Assimétrica) */}
      <RecentProjectsSection />

      {/* 6. SEÇÃO — EXPERIÊNCIAS REAIS / PROVA SOCIAL */}
      <TestimonialsSection />

      {/* 7. SEÇÃO — FORMAS DE CONTRATAÇÃO */}
      <PlansCTASection />

      {/* 8. SEÇÃO — CTA FINAL CINEMATOGRÁFICO */}
      <FinalCTASection />
    </>
  );
}
