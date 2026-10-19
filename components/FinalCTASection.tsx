"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_MESSAGES, WHATSAPP_ORCAMENTO_URL, whatsappUrl } from "@/lib/contato";

export function FinalCTASection() {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#0D1F16] py-16 text-[#FAF9F5] sm:min-h-[580px] sm:py-28 lg:min-h-[620px] lg:py-32">
      {/* Imagem de Fundo de um Jardim Real Finalizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero01.png"
          alt="Jardim finalizado com vegetação exuberante e arquitetura — Universo Paisagismo"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000 ease-out"
        />
        {/* Overlay Verde-Escuro Suave para Alto Contraste e Legibilidade */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0D1F16]/95 via-[#0D1F16]/82 to-[#0D1F16]/90"
          aria-hidden="true"
        />
        {/* Iluminação radial sutil */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,154,99,0.12),transparent_75%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 md:px-8 text-center">
        <Reveal delayMs={0}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#172D21]/80 backdrop-blur-md px-4 py-1.5 border border-[#C49A63]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C97832] animate-pulse" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#D9C5A5] font-semibold">
              VAMOS TRANSFORMAR SEU ESPAÇO?
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          {/* Título Principal */}
          <h2 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.1] tracking-tight text-[#FAF9F5]">
            O seu próximo jardim<br className="hidden sm:inline" /> pode começar aqui.
          </h2>
        </Reveal>

        <Reveal delayMs={200}>
          {/* Texto Descritivo */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D9C5A5]/90 font-light max-w-[54ch] mx-auto">
            Conte para nós como é o seu espaço e o que você imagina para ele. A Universo cuida do planejamento à execução.
          </p>
        </Reveal>

        <Reveal delayMs={300}>
          {/* Botões de Conversão */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            {/* Botão Principal: Solicitar Orçamento → WhatsApp */}
            <a
              href={WHATSAPP_ORCAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#B9683A] px-8 py-4 text-base font-semibold text-[#FAF9F5] shadow-[0_10px_30px_rgba(185,104,58,0.35)] transition-all duration-300 hover:bg-[#C49A63] hover:text-[#0D1F16] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(196,154,99,0.4)] active:scale-[0.98]"
            >
              <i className="bi bi-whatsapp text-lg" aria-hidden="true" />
              <span>Solicitar orçamento</span>
            </a>

            {/* Botão Secundário: Falar pelo WhatsApp */}
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.projeto)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-base font-medium text-[#FAF9F5] transition-all duration-300 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-white hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <i className="bi bi-whatsapp text-lg text-[#25D366] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
