"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Play,
  Pause,
  SpeakerHigh,
  SpeakerLow,
  SpeakerSlash,
} from "@phosphor-icons/react";

type HeroLandscape3DProps = {
  children: ReactNode;
  className?: string;
};

const indicators = [
  { value: "200+", label: "Projetos", subtitle: "Realizados" },
  { value: "+10 Anos", label: "De mercado", subtitle: "E experiência" },
  { value: "Belo Horizonte", label: "E região", subtitle: "Metropolitana" },
  { value: "Projetos 3D", label: "Visualização", subtitle: "Antes da obra" },
];

export function HeroLandscape3D({ children, className = "" }: HeroLandscape3DProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showCenterIcon, setShowCenterIcon] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<string>("9 / 16");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.videoWidth && video.videoHeight) {
      setAspectRatio(`${video.videoWidth} / ${video.videoHeight}`);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    setShowCenterIcon(true);
    setTimeout(() => {
      setShowCenterIcon(false);
    }, 600);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      if (video.volume === 0) {
        video.volume = 0.8;
        setVolume(0.8);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    const video = videoRef.current;
    setVolume(newVol);

    if (video) {
      video.volume = newVol;
      if (newVol === 0) {
        video.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        video.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <section
      className={`relative flex flex-col justify-between min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] border-b border-[#DDE5DC] bg-gradient-to-b from-[#F7F8F3] via-[#F1F4EF]/70 to-[#F7F8F3] pt-2 sm:pt-4 md:pt-6 overflow-hidden ${className}`}
      aria-label="Apresentação principal Universo Paisagismo"
    >
      {/* Iluminação suave e formas orgânicas sutis de fundo */}
      <div
        className="pointer-events-none absolute -top-32 -left-28 h-[450px] w-[450px] rounded-full bg-[#8A9B7A]/12 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-[#C97832]/8 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 my-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-6 lg:gap-8 xl:gap-12">
          {/* Coluna de Texto e CTAs (No mobile fica em 1º lugar, no desktop à direita) */}
          <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-7 w-full flex flex-col items-center text-center lg:items-start lg:text-left">
            {children}
          </div>

          {/* Coluna do Card de Vídeo (Deslocado mais à direita e aumentado em 2cm) */}
          <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[390px] lg:max-w-[370px] xl:max-w-[400px] lg:ml-14 xl:ml-20">
              {/* Brilho decorativo suave de fundo */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#C97832]/15 via-[#2F6B4F]/12 to-transparent blur-xl" />

              {/* Card Container com Acabamento Editorial Premium (+2cm) */}
              <div
                className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] border border-[#DDE5DC] bg-stone-950 shadow-[0_20px_50px_rgba(23,63,42,0.14)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_25px_60px_rgba(23,63,42,0.20)] max-h-[42dvh] sm:max-h-[54vh] md:max-h-[440px] lg:max-h-[460px]"
                style={{ aspectRatio }}
              >
                {/* Selo Editorial Discreto: PROJETO REAL • UNIVERSO PAISAGISMO */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-[#0D1F16]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 backdrop-blur-md border border-white/15 shadow-sm pointer-events-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C97832] animate-pulse" />
                  <span>Projeto Real • Universo Paisagismo</span>
                </div>

                {/* Vídeo Preenchendo 100% da Moldura */}
                <video
                  ref={videoRef}
                  src="/hero/hero%2002.mp4"
                  poster="/posters/hero-02.jpg"
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={togglePlay}
                  className="h-full w-full object-cover cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />

                {/* Feedback Central ao clicar */}
                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    showCenterIcon
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0D1F16]/80 text-white backdrop-blur-md shadow-2xl border border-white/20">
                    {isPlaying ? (
                      <Play size={24} weight="fill" className="ml-1 text-[#C97832]" />
                    ) : (
                      <Pause size={24} weight="fill" className="text-[#C97832]" />
                    )}
                  </div>
                </div>

                {/* Barra de Controles Inferior */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-2 rounded-full bg-[#0D1F16]/80 px-3 py-1.5 text-white backdrop-blur-md shadow-lg border border-white/15 transition-opacity duration-300 group-hover:opacity-100 opacity-90 sm:opacity-95">
                  {/* Play / Pause */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                    title={isPlaying ? "Pausar" : "Reproduzir"}
                    className="flex h-10 w-10 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all text-white"
                  >
                    {isPlaying ? (
                      <Pause size={13} weight="fill" />
                    ) : (
                      <Play size={13} weight="fill" className="ml-0.5" />
                    )}
                  </button>

                  <div className="h-3.5 w-px bg-white/20" />

                  {/* Mudo e Slider de Volume */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      aria-label={isMuted || volume === 0 ? "Ativar som" : "Desativar som"}
                      title={isMuted || volume === 0 ? "Ativar som" : "Desativar som"}
                      className="flex h-10 w-10 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all text-white"
                    >
                      {isMuted || volume === 0 ? (
                        <SpeakerSlash size={14} weight="bold" />
                      ) : volume < 0.5 ? (
                        <SpeakerLow size={14} weight="bold" />
                      ) : (
                        <SpeakerHigh size={14} weight="bold" />
                      )}
                    </button>

                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Controle de volume"
                      title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                      className="h-1.5 w-14 sm:w-16 cursor-pointer appearance-none rounded-full bg-white/30 accent-[#C97832] hover:bg-white/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. FAIXA DE INDICADORES / PROVA DE EXPERIÊNCIA INTEGRADA NA MESMA TELA */}
      <div className="mt-4 md:mt-6 w-full border-t border-[#DDE5DC] bg-[#F7F8F3]/90 backdrop-blur-sm shrink-0">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#DDE5DC] px-4 py-3.5 sm:py-4 md:px-8">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-2 sm:p-2.5 group transition-transform duration-300 hover:-translate-y-0.5"
            >
              <p className="font-serif text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.85rem] font-medium tracking-tight text-[#173F2A] group-hover:text-[#2F6B4F] transition-colors leading-tight">
                {item.value}
              </p>
              <p className="mt-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#2F6B4F]">
                {item.label}
              </p>
              <p className="text-[11px] sm:text-[11px] text-[#526B45] leading-tight">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
