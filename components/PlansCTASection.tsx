"use client";

import { Reveal } from "@/components/Reveal";
import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/contato";

export function PlansCTASection() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F3327] bg-[#0D1F16] py-16 text-[#FAF9F5] sm:py-28 lg:py-36">
      {/* Iluminação radial sutil */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(196,154,99,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(185,104,58,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#172D21] px-4 py-1.5 border border-[#C49A63]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C97832]" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#D9C5A5] font-semibold">
                ENCONTRE O MELHOR CAMINHO PARA O SEU ESPAÇO
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FAF9F5] font-normal leading-[1.15]">
              Seu jardim começa com<br className="hidden sm:inline" /> um bom planejamento.
            </h2>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D9C5A5]/85 font-light max-w-[58ch] mx-auto">
              Do projeto 3D à execução completa, escolha o ponto de partida ideal para transformar seu espaço.
            </p>
          </Reveal>
        </div>

        {/* 2. AS 3 FORMAS DE CONTRATAÇÃO (GRID EDITORIAL INTEGRADO) */}
        <div className="mt-14 sm:mt-16 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* BLOCO 01: PROJETO DE PAISAGISMO */}
          <Reveal delayMs={120} className="lg:col-span-4 flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border border-[#1F3327] bg-[#0F2218]/90 p-7 sm:p-8 backdrop-blur-sm transition-all duration-400 hover:border-[#C49A63]/40 hover:bg-[#12281D] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#C49A63]">
                    01
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A9B7A]">
                    Planejamento
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl text-[#FAF9F5] font-normal">
                  Projeto de Paisagismo
                </h3>

                <p className="mt-2 text-sm text-[#D9C5A5]/80 font-light leading-relaxed">
                  Para quem quer planejar cada detalhe com segurança antes de iniciar as obras.
                </p>

                <div className="mt-6 border-t border-[#1F3327] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#8A9B7A] mb-3">
                    O que está incluído:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF9F5]/90">
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Estudo de insolação e leitura do terreno</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Visualização realista em 3D</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Definição botânica e materiais</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Planta executiva e guia de plantio</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#1F3327] pt-6">
                <p className="font-mono text-[11px] text-[#8A9B7A] uppercase tracking-wider">
                  Investimento
                </p>
                <p className="text-lg font-serif text-[#FAF9F5] mt-0.5">
                  Orçamento personalizado
                </p>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.planoProjeto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#C49A63]/40 bg-[#172D21] px-5 py-3 text-sm font-medium text-[#FAF9F5] transition-all duration-300 hover:border-[#C49A63] hover:bg-[#C49A63] hover:text-[#0D1F16]"
                >
                  <i className="bi bi-whatsapp text-base" aria-hidden="true" />
                  <span>Quero meu projeto</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* BLOCO 02: PROJETO + EXECUÇÃO (DESTAQUE CENTRAL / PROTAGONISTA) */}
          <Reveal delayMs={200} className="lg:col-span-4 flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border-2 border-[#B9683A] bg-[#142C1F] p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-400 hover:shadow-[0_24px_60px_rgba(185,104,58,0.25)] hover:-translate-y-1">
              {/* Badge Solução Completa */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B9683A] px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#FAF9F5] shadow-md">
                  <i className="bi bi-stars text-xs" />
                  SOLUÇÃO COMPLETA
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-sm font-semibold text-[#B9683A]">
                    02
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9C5A5]">
                    Do início ao fim
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl sm:text-[1.7rem] text-[#FAF9F5] font-normal leading-snug">
                  Projeto + Execução
                </h3>

                <p className="mt-2 text-sm text-[#D9C5A5] font-light leading-relaxed">
                  Para quem quer a Universo acompanhando a transformação do planejamento à entrega final do jardim.
                </p>

                <div className="mt-6 border-t border-[#1F3829] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#D9C5A5]/70 mb-3">
                    O que está incluído:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF9F5]">
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2-circle text-[#B9683A] text-base shrink-0" />
                      <span><strong>Projeto 3D completo</strong> e humanizado</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2-circle text-[#B9683A] text-base shrink-0" />
                      <span>Fornecimento e seleção técnica de espécies</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2-circle text-[#B9683A] text-base shrink-0" />
                      <span>Preparo de solo, adubação e plantio técnico</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2-circle text-[#B9683A] text-base shrink-0" />
                      <span>Acompanhamento integral e entrega da obra</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#1F3829] pt-6">
                <p className="font-mono text-[11px] text-[#D9C5A5]/80 uppercase tracking-wider">
                  Investimento
                </p>
                <p className="text-lg font-serif text-[#FAF9F5] mt-0.5">
                  Orçamento personalizado
                </p>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.planoCompleto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#B9683A] px-5 py-3.5 text-sm sm:text-base font-semibold text-[#FAF9F5] shadow-[0_8px_20px_rgba(185,104,58,0.35)] transition-all duration-300 hover:bg-[#C49A63] hover:text-[#0D1F16] hover:shadow-[0_12px_28px_rgba(196,154,99,0.4)] active:scale-[0.98]"
                >
                  <i className="bi bi-whatsapp text-base" aria-hidden="true" />
                  <span>Solicitar orçamento</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* BLOCO 03: MANUTENÇÃO E CUIDADOS */}
          <Reveal delayMs={280} className="lg:col-span-4 flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border border-[#1F3327] bg-[#0F2218]/90 p-7 sm:p-8 backdrop-blur-sm transition-all duration-400 hover:border-[#C49A63]/40 hover:bg-[#12281D] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#C49A63]">
                    03
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A9B7A]">
                    Pós-obra e Cuidados
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl text-[#FAF9F5] font-normal">
                  Manutenção e Cuidados
                </h3>

                <p className="mt-2 text-sm text-[#D9C5A5]/80 font-light leading-relaxed">
                  Para jardins já existentes que precisam continuar saudáveis, vigorosos e bonitos.
                </p>

                <div className="mt-6 border-t border-[#1F3327] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#8A9B7A] mb-3">
                    O que está incluído:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF9F5]/90">
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Manutenção periódica e visitas técnicas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Podas de formação, limpeza e condução</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Adubação sazonal e controle fitossanitário</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <i className="bi bi-check2 text-[#C49A63] text-sm shrink-0 mt-0.5" />
                      <span>Revitalização e enriquecimento de canteiros</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#1F3327] pt-6">
                <p className="font-mono text-[11px] text-[#8A9B7A] uppercase tracking-wider">
                  Investimento
                </p>
                <p className="text-lg font-serif text-[#FAF9F5] mt-0.5">
                  Orçamento personalizado
                </p>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.planoManutencao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#C49A63]/40 bg-[#172D21] px-5 py-3 text-sm font-medium text-[#FAF9F5] transition-all duration-300 hover:border-[#C49A63] hover:bg-[#C49A63] hover:text-[#0D1F16]"
                >
                  <i className="bi bi-whatsapp text-base" aria-hidden="true" />
                  <span>Falar com especialista</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. FECHAMENTO DA SEÇÃO / CTA DE AVALIAÇÃO */}
        <Reveal delayMs={360}>
          <div className="mt-16 sm:mt-20 rounded-2xl border border-[#1F3829] bg-gradient-to-b from-[#12281D] to-[#0A1711] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF9F5] font-normal">
              Não sabe qual opção faz sentido para o seu espaço?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#D9C5A5]/85 font-light max-w-[50ch] mx-auto leading-relaxed">
              Conte um pouco sobre o seu projeto e nós ajudamos você a definir o melhor caminho.
            </p>
            <div className="mt-7">
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.avaliacao)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#C49A63] px-8 py-4 text-sm sm:text-base font-semibold text-[#0D1F16] shadow-[0_8px_24px_rgba(196,154,99,0.3)] transition-all duration-300 hover:bg-[#B9683A] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(185,104,58,0.35)] active:scale-[0.98]"
              >
                <i className="bi bi-whatsapp text-base" aria-hidden="true" />
                <span>Solicitar uma avaliação</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
