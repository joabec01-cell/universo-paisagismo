"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

// ============================================================================
// CONFIGURAÇÃO DOS ARQUIVOS E DADOS DAS OBRAS RECENTES
// ============================================================================
export const recentProjectsData = {
  // PROJETO 01 — DESTAQUE PRINCIPAL
  project01: {
    id: "projeto-01",
    category: "COMERCIAL · FLORIANÓPOLIS",
    title: "Jardim feito no Noka Sushi",
    mediaType: "image" as const,
    src: "/pasta de imagem 01/WhatsApp Image 2026-09-26 at 19.00.42.jpeg",
    alt: "Jardim do Noka Sushi em Florianópolis — Universo Paisagismo",
    href: "/portfolio",
    objectPosition: "center center",
  },

  // PROJETO 02 — SECUNDÁRIO SUPERIOR
  project02: {
    id: "projeto-02",
    category: "RESIDENCIAL · BELO HORIZONTE",
    title: "Jardim residencial",
    mediaType: "image" as const,
    src: "/before-after/b3.jpeg",
    alt: "Jardim residencial em Belo Horizonte — Universo Paisagismo",
    href: "/portfolio",
    objectPosition: "center center",
  },

  // PROJETO 03 — SECUNDÁRIO INFERIOR
  project03: {
    id: "projeto-03",
    category: "RESIDENCIAL · BELO HORIZONTE",
    title: "Jardim em Belo Horizonte",
    mediaType: "image" as const,
    src: "/before-after/c3.jpeg",
    alt: "Jardim em Belo Horizonte — Universo Paisagismo",
    href: "/portfolio",
    objectPosition: "center center",
  },

  // PROJETO 04 — BASE ESQUERDA
  project04: {
    id: "projeto-04",
    category: "RESIDENCIAL · BELO HORIZONTE",
    title: "Jardim feito em um apartamento",
    mediaType: "image" as const,
    src: "/pasta de imagem 01/03.jpeg",
    alt: "Jardim em apartamento em Belo Horizonte — Universo Paisagismo",
    href: "/portfolio",
    objectPosition: "center center",
  },

  // PROJETO 05 — BASE DIREITA
  project05: {
    id: "projeto-05",
    category: "RESIDENCIAL · JABOTICATUBAS",
    title: "Jardim feito em um sítio",
    mediaType: "image" as const,
    src: "/pasta de imagem 01/01.jpeg",
    alt: "Jardim em sítio em Jaboticatubas — Universo Paisagismo",
    href: "/portfolio",
    objectPosition: "center center",
  },
};

type RecentProject = (typeof recentProjectsData)[keyof typeof recentProjectsData];

export function RecentProjectsSection() {
  const { project01, project02, project03, project04, project05 } = recentProjectsData;
  const [active, setActive] = useState<RecentProject | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
    <section className="relative border-b border-[#E2E8DF] bg-[#FAF9F5] py-16 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delayMs={0} className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-5 bg-[#C97832]" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#526B45] font-semibold">
                PORTFÓLIO
              </p>
            </div>

            {/* Título Principal */}
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D1F16] font-normal">
              Obras recentes
            </h2>

            {/* Texto Descritivo */}
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#4A554A] font-light max-w-[54ch]">
              Cada entrega reflete o jeito de morar ou trabalhar de quem nos contratou.
            </p>
          </Reveal>

          {/* Link Editorial para Portfólio Completo (Desktop) */}
          <Reveal delayMs={100} className="hidden md:block">
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-2 pb-1 text-sm sm:text-base font-medium text-[#0D1F16] transition-colors duration-300 hover:text-[#C97832]"
            >
              <span>Ver portfólio completo</span>
              <i
                className="bi bi-arrow-right text-sm transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C97832]"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C97832] transition-all duration-300 ease-out group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        {/* 2. COMPOSIÇÃO EDITORIAL ASSIMÉTRICA */}
        <div className="mt-12 sm:mt-14 space-y-6">
          {/* LINHA 1: PROJETO 01 (DESTAQUE VÍDEO ~60%) + PROJETOS 02 E 03 (COLUNA VERTICAL ~40%) */}
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            {/* PROJETO 01 — DESTAQUE PRINCIPAL COM VÍDEO (7 colunas de 12) */}
            <Reveal delayMs={120} className="lg:col-span-7 h-full">
              <button
                type="button"
                onClick={() => setActive(project01)}
                aria-label={`Ampliar ${project01.title}`}
                className="group relative block cursor-zoom-in text-left h-[300px] sm:h-[360px] lg:h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[416px] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_16px_40px_rgba(13,31,22,0.08)] transition-all duration-500 hover:border-[#C49A63]/50 hover:shadow-[0_24px_55px_rgba(13,31,22,0.16)]"
              >
                <Image
                  src={project01.src}
                  alt={project01.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  style={{ objectFit: "cover", objectPosition: project01.objectPosition }}
                  className="h-full w-full object-cover"
                />

                {/* Gradiente sutil inferior para legibilidade tipográfica */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/90 via-[#0D1F16]/25 to-transparent transition-opacity duration-300 group-hover:from-[#0D1F16]/95"
                  aria-hidden="true"
                />

                {/* Badge de Projeto Principal no topo */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0D1F16]/75 backdrop-blur-md px-3 py-1 border border-white/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C97832] animate-pulse" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F4F1E9] font-medium">
                      DESTAQUE REAL
                    </span>
                  </div>
                </div>

                {/* Informações na base com seta discreta */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                      {project01.category}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl sm:text-2xl lg:text-3xl text-[#FAF9F5] font-normal leading-snug">
                      {project01.title}
                    </h3>
                  </div>

                  {/* Seta discreta ↗ */}
                  <div
                    className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F5] shadow-sm transition-all duration-300 group-hover:bg-[#B9683A] group-hover:border-[#B9683A] group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <i className="bi bi-arrow-up-right text-sm sm:text-base" />
                  </div>
                </div>
              </button>
            </Reveal>

            {/* COLUNA DIREITA: PROJETO 02 & PROJETO 03 (5 colunas de 12) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* PROJETO 02 */}
              <Reveal delayMs={200} className="flex-1">
                <button
                  type="button"
                  onClick={() => setActive(project02)}
                  aria-label={`Ampliar ${project02.title}`}
                  className="group relative block cursor-zoom-in text-left aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[196px] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_12px_32px_rgba(13,31,22,0.06)] transition-all duration-500 hover:border-[#C49A63]/50 hover:shadow-[0_18px_45px_rgba(13,31,22,0.12)]"
                >
                  <Image
                    src={project02.src}
                    alt={project02.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    style={{ objectFit: "cover", objectPosition: project02.objectPosition }}
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/90 via-[#0D1F16]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0D1F16]/95"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                        {project02.category}
                      </p>
                      <h3 className="mt-1 font-serif text-lg sm:text-xl text-[#FAF9F5] font-normal leading-snug">
                        {project02.title}
                      </h3>
                    </div>
                    <div
                      className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F5] transition-all duration-300 group-hover:bg-[#B9683A] group-hover:border-[#B9683A] group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    >
                      <i className="bi bi-arrow-up-right text-xs sm:text-sm" />
                    </div>
                  </div>
                </button>
              </Reveal>

              {/* PROJETO 03 */}
              <Reveal delayMs={280} className="flex-1">
                <button
                  type="button"
                  onClick={() => setActive(project03)}
                  aria-label={`Ampliar ${project03.title}`}
                  className="group relative block cursor-zoom-in text-left aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[196px] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_12px_32px_rgba(13,31,22,0.06)] transition-all duration-500 hover:border-[#C49A63]/50 hover:shadow-[0_18px_45px_rgba(13,31,22,0.12)]"
                >
                  <Image
                    src={project03.src}
                    alt={project03.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    style={{ objectFit: "cover", objectPosition: project03.objectPosition }}
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/90 via-[#0D1F16]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0D1F16]/95"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                        {project03.category}
                      </p>
                      <h3 className="mt-1 font-serif text-lg sm:text-xl text-[#FAF9F5] font-normal leading-snug">
                        {project03.title}
                      </h3>
                    </div>
                    <div
                      className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F5] transition-all duration-300 group-hover:bg-[#B9683A] group-hover:border-[#B9683A] group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    >
                      <i className="bi bi-arrow-up-right text-xs sm:text-sm" />
                    </div>
                  </div>
                </button>
              </Reveal>
            </div>
          </div>

          {/* LINHA 2: PROJETO 04 (ESQUERDA ~50%) + PROJETO 05 (DIREITA ~50%) */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* PROJETO 04 */}
            <Reveal delayMs={340} className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setActive(project04)}
                aria-label={`Ampliar ${project04.title}`}
                className="group relative block cursor-zoom-in text-left aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_12px_32px_rgba(13,31,22,0.06)] transition-all duration-500 hover:border-[#C49A63]/50 hover:shadow-[0_18px_45px_rgba(13,31,22,0.12)]"
              >
                <Image
                  src={project04.src}
                  alt={project04.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: project04.objectPosition }}
                  className="h-full w-full object-cover"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/90 via-[#0D1F16]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0D1F16]/95"
                  aria-hidden="true"
                />

                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                      {project04.category}
                    </p>
                    <h3 className="mt-1 font-serif text-lg sm:text-xl lg:text-2xl text-[#FAF9F5] font-normal leading-snug">
                      {project04.title}
                    </h3>
                  </div>
                  <div
                    className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F5] transition-all duration-300 group-hover:bg-[#B9683A] group-hover:border-[#B9683A] group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <i className="bi bi-arrow-up-right text-sm" />
                  </div>
                </div>
              </button>
            </Reveal>

            {/* PROJETO 05 */}
            <Reveal delayMs={400} className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setActive(project05)}
                aria-label={`Ampliar ${project05.title}`}
                className="group relative block cursor-zoom-in text-left aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#DDE5DC] bg-[#0D1F16] shadow-[0_12px_32px_rgba(13,31,22,0.06)] transition-all duration-500 hover:border-[#C49A63]/50 hover:shadow-[0_18px_45px_rgba(13,31,22,0.12)]"
              >
                <Image
                  src={project05.src}
                  alt={project05.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: project05.objectPosition }}
                  className="h-full w-full object-cover"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1F16]/90 via-[#0D1F16]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0D1F16]/95"
                  aria-hidden="true"
                />

                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
                      {project05.category}
                    </p>
                    <h3 className="mt-1 font-serif text-lg sm:text-xl lg:text-2xl text-[#FAF9F5] font-normal leading-snug">
                      {project05.title}
                    </h3>
                  </div>
                  <div
                    className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F5] transition-all duration-300 group-hover:bg-[#B9683A] group-hover:border-[#B9683A] group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <i className="bi bi-arrow-up-right text-sm" />
                  </div>
                </div>
              </button>
            </Reveal>
          </div>
        </div>

        {/* Link no final visível no Mobile */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-base font-medium text-[#0D1F16] transition-colors duration-300 hover:text-[#C97832]"
          >
            <span>Ver portfólio completo</span>
            <i className="bi bi-arrow-right text-sm text-[#C97832] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
    {mounted && active
      ? createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundColor: "#070f0c", zIndex: 90 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              autoFocus
              aria-label="Fechar imagem"
              onClick={() => setActive(null)}
              className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0D1F16]/70 text-[#FAF9F5] backdrop-blur-md transition-colors hover:bg-[#B9683A]"
            >
              <i className="bi bi-x-lg text-lg" aria-hidden="true" />
            </button>
            <figure
              className="flex max-h-full w-full max-w-6xl flex-col items-center gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[min(78vh,900px)] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="96vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C49A63]">
                  {active.category}
                </p>
                <p className="mt-1 font-serif text-xl text-[#FAF9F5] sm:text-2xl">{active.title}</p>
              </figcaption>
            </figure>
          </div>,
          document.body
        )
      : null}
    </>
  );
}
