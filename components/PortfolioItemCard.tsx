"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { PortfolioFigure } from "@/components/PortfolioFigure";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import type { PortfolioItem } from "@/lib/portfolio";

export function PortfolioItemCard({ item }: { item: PortfolioItem }) {
  const images = item.images ?? [];
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const wheelItems = useMemo<WorksWheelItem[]>(
    () =>
      images.map((src, index) => ({
        title: String(index + 1).padStart(2, "0"),
        image: src,
      })),
    [images]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const body = (
    <>
      <PortfolioFigure
        imageSrc={item.imageSrc}
        alt={`${item.title} — Universo Paisagismo`}
        className="aspect-[16/11]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-8 md:p-10">
        <span className="inline-flex w-fit rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
          {item.tag}
        </span>
        <h2 className="mt-4 font-serif text-xl tracking-tight text-ink sm:mt-5 sm:text-2xl">{item.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
        {images.length > 0 ? (
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#C97832]">
            Ver todas as imagens
          </p>
        ) : item.href ? (
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#C97832]">
            {item.slug === "instagram" ? "Ver no Instagram" : "Abrir conversa"}
          </p>
        ) : null}
      </div>
    </>
  );

  return (
    <>
      {images.length > 0 ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ver todas as imagens de ${item.title}`}
          className="group flex h-full w-full cursor-zoom-in flex-col overflow-hidden rounded-xl border border-line bg-white text-left transition-all duration-300 hover:shadow-[0_12px_36px_rgba(61,111,86,0.12)]"
        >
          {body}
        </button>
      ) : item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.hrefLabel ?? item.title}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:shadow-[0_12px_36px_rgba(61,111,86,0.12)]"
        >
          {body}
        </a>
      ) : (
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:shadow-[0_12px_36px_rgba(61,111,86,0.12)]">
          {body}
        </article>
      )}

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 flex flex-col overscroll-none"
              style={{ backgroundColor: "#070f0c", zIndex: 90 }}
              role="dialog"
              aria-modal="true"
              aria-label={item.title}
            >
              <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:gap-4 sm:px-8 sm:py-4">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C49A63] sm:text-[11px]">
                    {item.tag}
                  </p>
                  <p className="mt-0.5 truncate font-serif text-lg text-[#FAF9F5] sm:mt-1 sm:text-2xl">
                    {item.title}
                  </p>
                </div>
                <button
                  type="button"
                  autoFocus
                  aria-label="Fechar imagens"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0D1F16]/70 text-[#FAF9F5] backdrop-blur-md transition-colors hover:bg-[#B9683A]"
                >
                  <i className="bi bi-x-lg text-lg" aria-hidden="true" />
                </button>
              </div>
              <div className="min-h-0 flex-1 pb-[env(safe-area-inset-bottom)]">
                <WorksWheel items={wheelItems} label={item.title} className="h-full min-h-0" />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
