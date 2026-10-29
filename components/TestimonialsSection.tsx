"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

// ============================================================================
// CONFIGURAÇÃO DOS DEPOIMENTOS EM VÍDEO E AVALIAÇÕES GOOGLE
// Substitua facilmente os caminhos e textos abaixo pelos dados definitivos
// ============================================================================
export const testimonialVideos = [
  {
    id: "video-01",
    label: "Depoimento 01",
    client: "Transformação do Jardim",
    location: "Nova Lima, MG",
    src: "/depoimentos/WhatsApp Video 2026-09-27 at 00.16.35.mp4",
    poster: "/posters/depoimento-01.jpg",
  },
  {
    id: "video-02",
    label: "Depoimento 02",
    client: "Projeto Residencial",
    location: "Belo Horizonte, MG",
    src: "/depoimentos/WhatsApp Video 2026-09-27 at 00.15.48.mp4",
    poster: "/posters/depoimento-02.jpg",
  },
];

export const googleReviews = [
  {
    id: "review-01",
    // [NOME]
    name: "Mariana Alvarenga",
    // [NOTA]
    rating: 5,
    location: "Belo Horizonte",
    // [TEXTO DA AVALIAÇÃO]
    text: "Experiência impecável do projeto 3D até a entrega final. A equipe da Universo entendeu perfeitamente a nossa rotina e transformou nossa área externa em um verdadeiro refúgio. O jardim ficou lindo e muito funcional.",
    badge: "Avaliação no Google",
  },
  {
    id: "review-02",
    // [NOME]
    name: "Rodrigo Mendonça",
    // [NOTA]
    rating: 5,
    location: "Nova Lima",
    // [TEXTO DA AVALIAÇÃO]
    text: "O diferencial de visualizar em 3D antes da obra nos deu total segurança. O resultado real superou o planejamento. Profissionalismo, pontualidade na execução e seleção impecável das espécies.",
    badge: "Avaliação no Google",
  },
  {
    id: "review-03",
    // [NOME]
    name: "Camila Guimarães",
    // [NOTA]
    rating: 5,
    location: "Belo Horizonte",
    // [TEXTO DA AVALIAÇÃO]
    text: "Equipe extremamente atenciosa e técnica. Cada planta foi escolhida com precisão para o solo e insolação da nossa casa. Acompanhamento próximo do início ao fim. Recomendo de olhos fechados!",
    badge: "Avaliação no Google",
  },
];

export function TestimonialsSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = testimonialVideos[activeVideoIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSelectVideo = (idx: number) => {
    if (idx === activeVideoIndex) return;
    setIsPlaying(false);
    setActiveVideoIndex(idx);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative border-b border-[#E2E8DF] bg-[#FAF9F5] py-16 sm:py-28 lg:py-32 overflow-hidden">
      {/* Detalhe de fundo suave */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#8A9B7A]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        {/* 1. CABEÇALHO */}
        <div className="max-w-3xl">
          <Reveal delayMs={0}>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-5 bg-[#C97832]" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#526B45] font-semibold">
                EXPERIÊNCIAS REAIS
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D1F16] font-normal">
              Quem confia no nosso trabalho, recomenda.
            </h2>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A554A] font-light max-w-[62ch]">
              Cada projeto envolve proximidade, planejamento e cuidado em todas as etapas. Veja experiências de clientes que confiaram seus espaços à Universo Paisagismo.
            </p>
          </Reveal>
        </div>

        {/* 2. COMPOSIÇÃO: VÍDEO PRINCIPAL (~52%) + AVALIAÇÕES GOOGLE (~48%) */}
        <div className="mt-12 sm:mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* COLUNA ESQUERDA: VÍDEO VERTICAL DE DEPOIMENTO */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            <Reveal delayMs={150} className="w-full max-w-[460px]">
              {/* Frame Vertical Sofisticado */}
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_20px_50px_rgba(13,31,22,0.12)] transition-all duration-500 hover:border-[#C49A63]/50">
                <video
                  ref={videoRef}
                  src={currentVideo.src}
                  poster={currentVideo.poster}
                  preload="metadata"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="h-full w-full object-cover"
                />

                {/* Overlay e Botão de Play Central quando não está reproduzindo */}
                {!isPlaying && (
                  <div
                    onClick={handleTogglePlay}
                    className="absolute inset-0 z-10 flex cursor-pointer flex-col justify-between bg-gradient-to-t from-[#0D1F16]/85 via-[#0D1F16]/20 to-transparent p-6 transition-opacity duration-300 group-hover:from-[#0D1F16]/90"
                  >
                    {/* Badge superior */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D1F16]/75 backdrop-blur-md px-3 py-1 border border-white/15 text-[11px] font-mono uppercase tracking-[0.2em] text-[#FAF9F5]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C97832]" aria-hidden="true" />
                        DEPOIMENTO EM VÍDEO
                      </span>
                    </div>

                    {/* Botão de Play Central Elegante */}
                    <div className="flex items-center justify-center">
                      <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-[#FAF9F5]/90 text-[#0D1F16] shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C97832] group-hover:text-white">
                        <i className="bi bi-play-fill text-2xl sm:text-3xl translate-x-0.5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Identificação do Cliente */}
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                        {currentVideo.location}
                      </p>
                      <h3 className="mt-1 font-serif text-lg sm:text-xl text-[#FAF9F5] font-normal">
                        {currentVideo.client}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Alternador Minimalista entre Vídeos */}
            <Reveal delayMs={240} className="w-full max-w-[460px]">
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A9B7A] font-medium">
                  Depoimentos:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {testimonialVideos.map((vid, idx) => {
                    const isActive = idx === activeVideoIndex;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => handleSelectVideo(idx)}
                        className={`group flex min-h-11 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-[#0D1F16] text-[#FAF9F5] shadow-sm"
                            : "bg-white/80 text-[#526B45] border border-[#DDE5DC] hover:border-[#C49A63]/50 hover:text-[#0D1F16]"
                        }`}
                      >
                        <i
                          className={`bi bi-play-circle text-xs ${
                            isActive ? "text-[#C49A63]" : "text-[#8A9B7A] group-hover:text-[#C49A63]"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{vid.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* COLUNA DIREITA: AVALIAÇÕES REAIS DO GOOGLE */}
          <div className="lg:col-span-6 space-y-5">
            {googleReviews.map((rev, i) => (
              <Reveal key={rev.id} delayMs={140 + i * 90}>
                <div className="group relative rounded-2xl border border-[#E2E8DF] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(13,31,22,0.03)] transition-all duration-300 hover:border-[#C49A63]/40 hover:shadow-[0_12px_32px_rgba(13,31,22,0.08)] hover:-translate-y-0.5">
                  {/* Topo do Card: Estrelas + Badge Google */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Estrelas Douradas */}
                    <div className="flex items-center gap-1 text-[#C49A63]" aria-label="Avaliação 5 estrelas">
                      {[...Array(rev.rating)].map((_, starIdx) => (
                        <i key={starIdx} className="bi bi-star-fill text-xs sm:text-sm" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Selo Discreto do Google */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF9F5] px-2.5 py-1 border border-[#E2E8DF] text-[11px] font-mono text-[#526B45]">
                      <i className="bi bi-google text-[11px] text-[#4285F4]" aria-hidden="true" />
                      <span>{rev.badge}</span>
                    </div>
                  </div>

                  {/* Texto da Avaliação com aspas sutis */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#242823] font-light">
                    “{rev.text}”
                  </p>

                  {/* Autor e Localização */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#F1F4EF] pt-4">
                    <div>
                      <h4 className="font-serif text-base font-medium text-[#0D1F16]">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-[#8A9B7A] font-mono tracking-wide">
                        {rev.location}
                      </p>
                    </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF9F5] text-[#526B45] text-xs">
                      <i className="bi bi-check-circle-fill text-[#526B45]" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Faixa de Credibilidade na Base */}
            <Reveal delayMs={420}>
              <div className="rounded-xl border border-[#DDE5DC] bg-[#FAF9F5] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#4A554A]">
                <div className="flex items-center gap-2">
                  <i className="bi bi-google text-[#4285F4] text-base" aria-hidden="true" />
                  <span className="font-medium text-[#0D1F16]">Avaliações verificadas de clientes</span>
                </div>
                <div className="flex items-center gap-1 text-[#C49A63]">
                  <i className="bi bi-star-fill text-xs" />
                  <span className="font-semibold text-[#0D1F16]">100% de satisfação e recomendação</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
