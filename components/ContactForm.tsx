"use client";

import { useState } from "react";
import {
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import {
  CONTACT_EMAIL,
  FORMSUBMIT_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from "@/lib/contato";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") || "").trim()) {
      form.reset();
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: data.get("nome"),
          email: data.get("email"),
          telefone: data.get("telefone") || "Não informado",
          mensagem: data.get("mensagem"),
          _subject: "Pedido de orçamento pelo site — Universo Paisagismo",
          _template: "table",
          _captcha: "false",
          _replyto: data.get("email"),
        }),
      });
      const payload = (await response.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!response.ok || (payload && payload.success !== "true" && payload.success !== true)) {
        throw new Error("formsubmit");
      }
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-14 sm:px-5 md:grid-cols-12 md:gap-12 md:px-8">
        <Reveal className="md:col-span-5">
          <div className="space-y-6 border border-line bg-white p-5 sm:space-y-8 sm:p-8 md:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                WhatsApp
              </p>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.contato)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex min-h-10 items-center gap-2 text-sm font-medium text-ink hover:underline"
              >
                <WhatsappLogo size={20} weight="bold" aria-hidden />
                {WHATSAPP_DISPLAY}
              </a>
              <p className="mt-1 text-xs text-muted">Mensagem com atendimento rápido</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Ligação
              </p>
              <a
                href={PHONE_TEL}
                className="mt-1 flex min-h-10 items-center gap-2 text-sm font-medium text-ink hover:underline"
              >
                <Phone size={20} weight="bold" aria-hidden />
                {PHONE_DISPLAY}
              </a>
              <p className="mt-1 text-xs text-muted">Para quem preferir falar por telefone</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                E-mail
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 flex min-h-10 items-center gap-2 break-all text-sm font-medium text-ink hover:underline"
              >
                <EnvelopeSimple className="shrink-0" size={20} weight="bold" />
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/universo_paisagismo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex min-h-10 items-center gap-2 text-sm font-medium text-ink hover:underline"
              >
                <InstagramLogo size={20} weight="bold" aria-hidden />
                @universo_paisagismo
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Área
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 shrink-0 text-ink" size={20} weight="bold" />
                Belo Horizonte e região metropolitana
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border border-line bg-canvas p-5 sm:p-8 md:p-10"
            noValidate
          >
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="nome" className="text-sm font-medium text-ink">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  autoComplete="name"
                  className="min-h-12 rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none ring-brand/20 focus:ring-2 md:text-sm"
                  placeholder="Como podemos chamar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="min-h-12 rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none ring-brand/20 focus:ring-2 md:text-sm"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="telefone" className="text-sm font-medium text-ink">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  className="min-h-12 rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none ring-brand/20 focus:ring-2 md:text-sm"
                  placeholder="(31) 90000-0000"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="mensagem" className="text-sm font-medium text-ink">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="resize-y rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none ring-brand/20 focus:ring-2 md:text-sm"
                  placeholder="Bairro, tipo de imóvel, metragem aproximada e o que imagina para o espaço."
                />
                <p className="text-xs text-muted">
                  A mensagem é enviada para o e-mail da Universo Paisagismo.
                </p>
              </div>
            </div>

            {state === "sent" ? (
              <p className="mt-6 text-sm text-accent" role="status">
                Mensagem enviada. Em breve retornamos pelo e-mail ou telefone informado.
              </p>
            ) : null}
            {state === "error" ? (
              <p className="mt-6 text-sm text-red-800" role="alert">
                Não foi possível enviar. Tente novamente ou use o telefone.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-olive py-3.5 text-base font-medium text-white shadow-[0_8px_24px_rgba(13,31,22,0.16)] transition-all duration-300 hover:bg-forest hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(13,31,22,0.24)] disabled:opacity-60 md:w-auto md:px-8 md:text-sm active:scale-[0.98]"
            >
              {state === "sending" ? (
                "Enviando…"
              ) : (
                <>
                  <span>Enviar pedido</span>
                  <i className="bi bi-arrow-up-right text-xs" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
