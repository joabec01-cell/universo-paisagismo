"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/contato";

export type ComparisonProject = {
  id: string;
  number: string;
  name: string;
  renderSrc: string;
  realSrc: string;
  renderAlt: string;
  realAlt: string;
  renderPos?: string;
  realPos?: string;
};

const projects: ComparisonProject[] = [
  {
    id: "tropical",
    number: "01",
    name: "Jardim Tropical",
    renderSrc: "/before-after/c4.png",
    realSrc: "/before-after/c3.jpeg",
    renderAlt: "Projeto 3D — Jardim Tropical",
    realAlt: "Resultado Real — Jardim Tropical executado pela Universo Paisagismo",
    renderPos: "center center",
    realPos: "center center",
  },
  {
    id: "compacto",
    number: "02",
    name: "Jardim Compacto",
    renderSrc: "/before-after/b4.png",
    realSrc: "/before-after/b3.jpeg",
    renderAlt: "Projeto 3D — Jardim Compacto planejado",
    realAlt: "Resultado Real — Jardim Compacto executado",
    renderPos: "center center",
    realPos: "center center",
  },
  {
    id: "interno",
    number: "03",
    name: "Jardim Interno",
    renderSrc: "/before-after/a2.png",
    realSrc: "/before-after/a3.jpeg",
    renderAlt: "Projeto 3D — Jardim Interno e circulação",
    realAlt: "Resultado Real — Jardim Interno concluído",
    renderPos: "center center",
    realPos: "center center",
  },
];

const features = [
  {
    title: "Cena realista",
    description: "Luz, vegetação, materiais e texturas ajudam o cliente a compreender o resultado antes da execução.",
    iconClass: "bi bi-eye",
  },
  {
    title: "Detalhamento",
    description: "Pedras, vegetação, mobiliário, iluminação e demais elementos são planejados antes da obra.",
    iconClass: "bi bi-rulers",
  },
  {
    title: "Integração",
    description: "Paisagismo, arquitetura, terreno e circulação são pensados como parte do mesmo ambiente.",
    iconClass: "bi bi-layers",
  },
];

export function Project3DComparison() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentProject = projects[activeProjectIndex];

  const handleSelectProject = (index: number) => {
    if (index === activeProjectIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveProjectIndex(index);
      setSliderPosition(50);
      setIsFading(false);
    }, 180);
  };

  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateSliderPos(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSliderPos(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignorar se já liberado
    }
  };

  // Suporte a teclado para acessibilidade
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="relative border-b border-[#1F3327] bg-[#0D1F16] text-[#F4F1E9] py-24 md:py-32 overflow-hidden">
      {/* Iluminação radial sofisticada no background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(196,154,99,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(185,104,58,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl">
          <Reveal delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#172D21] px-3.5 py-1 border border-[#C49A63]/30">
              <i className="bi bi-badge-3d text-[#C49A63] text-sm" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D9C5A5] font-medium">
                VISUALIZAÇÃO 3D
              </span>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FAF9F5] font-normal">
              Veja o jardim antes da obra
            </h2>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D9C5A5]/90 font-light max-w-[58ch]">
              Entregamos planta humanizada em 3D, escolha de materiais, vegetação e iluminação com leitura simples para quem não é do ramo técnico.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <p className="mt-3 flex items-center gap-2 text-sm sm:text-base font-medium text-[#C49A63]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9683A]" aria-hidden="true" />
              <span>Menos incerteza durante a obra. Mais segurança antes de executar.</span>
            </p>
          </Reveal>
        </div>

        {/* 2. COMPOSIÇÃO: COMPARADOR VISUAL VERTICAL / CONTEÚDO EDITORIAL */}
        <div className="mt-12 lg:mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Coluna Esquerda: Comparador Vertical Interativo */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            <Reveal delayMs={150} className="w-full max-w-[460px]">
              {/* Moldura do Comparador Interativo Vertical */}
              <div
                ref={containerRef}
                tabIndex={0}
                role="slider"
                aria-label="Comparador de Projeto 3D e Resultado Real"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="group relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-[#C49A63]/30 bg-[#07130D] shadow-[0_20px_50px_rgba(0,0,0,0.5)] touch-none focus:outline-none focus:ring-2 focus:ring-[#C49A63]/50"
              >
                {/* Transição Suave de Troca de Projeto */}
                <div
                  className={`relative h-full w-full transition-opacity duration-200 ${
                    isFading ? "opacity-30" : "opacity-100"
                  }`}
                >
                  {/* CAMADA INFERIOR / DIREITA: RESULTADO REAL */}
                  <div className="absolute inset-0 h-full w-full">
                    <Image
                      src={currentProject.realSrc}
                      alt={currentProject.realAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center center" }}
                      className="pointer-events-none"
                    />
                    {/* Label Direita: RESULTADO REAL */}
                    <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-[#0D1F16]/85 backdrop-blur-md px-3 py-1 border border-white/15 text-[11px] font-mono tracking-wider uppercase text-[#F4F1E9] shadow-sm">
                      RESULTADO REAL
                    </div>
                  </div>

                  {/* CAMADA SUPERIOR / ESQUERDA: PROJETO 3D (Recortada via clipPath) */}
                  <div
                    className="absolute inset-0 h-full w-full overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <Image
                      src={currentProject.renderSrc}
                      alt={currentProject.renderAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center center" }}
                      className="pointer-events-none"
                    />
                    {/* Label Esquerda: PROJETO 3D */}
                    <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-[#0D1F16]/85 backdrop-blur-md px-3 py-1 border border-[#C49A63]/30 text-[11px] font-mono tracking-wider uppercase text-[#C49A63] shadow-sm">
                      PROJETO 3D
                    </div>
                  </div>
                </div>

                {/* LINHA DIVISÓRIA COM CONTROLE CENTRAL */}
                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-20 w-[3px] bg-[#B9683A] shadow-[0_0_12px_rgba(185,104,58,0.7)]"
                  style={{ left: `calc(${sliderPosition}% - 1.5px)` }}
                >
                  {/* Botão circular central com setas */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0D1F16] border-2 border-[#C49A63] text-[#F4F1E9] shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-105">
                    <i className="bi bi-arrows text-sm text-[#C49A63]" aria-hidden="true" />
                  </div>
                </div>

                {/* Dica de interação sutil */}
                <div className="pointer-events-none absolute top-3.5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-[#0D1F16]/75 backdrop-blur-md px-3 py-1 border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D9C5A5]/80">
                  Arraste para comparar
                </div>
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita (6 colunas de 12 no desktop): Diferenciais + Seleção de Projetos + CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            {/* Lista dos 3 diferenciais integrados ao fundo */}
            <div className="divide-y divide-[#1F3327] border-y border-[#1F3327]">
              {features.map((feat, i) => (
                <Reveal key={feat.title} delayMs={160 + i * 80}>
                  <div className="group py-5 first:pt-3 last:pb-3 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Ícone sutil */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#172D21] border border-[#C49A63]/25 text-[#C49A63] transition-colors duration-300 group-hover:bg-[#B9683A] group-hover:text-white group-hover:border-[#B9683A]">
                        <i className={`${feat.iconClass} text-lg`} aria-hidden="true" />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-medium text-[#FAF9F5] tracking-tight transition-colors duration-300 group-hover:text-[#C49A63]">
                          {feat.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#D9C5A5]/80 font-light">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 3. NAVEGAÇÃO ENTRE OS 3 PROJETOS (Abaixo dos textos) */}
            <Reveal delayMs={340}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A9B7A] mb-3 font-medium">
                  Selecione o projeto para comparar:
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {projects.map((proj, idx) => {
                    const isActive = idx === activeProjectIndex;
                    return (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => handleSelectProject(idx)}
                        className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-[#172D21] text-[#FAF9F5] border border-[#C49A63]/60 shadow-[0_4px_16px_rgba(196,154,99,0.15)]"
                            : "bg-[#0F241A] text-[#D9C5A5]/70 border border-[#1F3327] hover:border-[#C49A63]/30 hover:text-[#FAF9F5] hover:bg-[#14291E]"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs font-semibold ${
                            isActive ? "text-[#C49A63]" : "text-[#8A9B7A] group-hover:text-[#C49A63]"
                          }`}
                        >
                          {proj.number}
                        </span>
                        <span className="text-[#8A9B7A]/50 font-light">—</span>
                        <span>{proj.name}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B9683A] animate-pulse ml-0.5" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* 5. CTA DA SEÇÃO */}
            <Reveal delayMs={400}>
              <div className="pt-1">
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.estudo3d)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#B9683A] px-7 py-4 text-sm sm:text-base font-medium text-[#FAF9F5] shadow-[0_8px_24px_rgba(185,104,58,0.3)] transition-all duration-300 hover:bg-[#C49A63] hover:text-[#0D1F16] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(196,154,99,0.35)] active:scale-[0.98]"
                >
                  <i className="bi bi-whatsapp text-base" aria-hidden="true" />
                  <span>Solicitar estudo 3D</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
