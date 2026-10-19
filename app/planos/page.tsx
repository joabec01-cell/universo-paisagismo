import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { planos } from "@/lib/planos";
import { WHATSAPP_ORCAMENTO_URL } from "@/lib/contato";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Planos Essencial, Projeto 3D e Completo — manutenção, estudo visual e obra integrada.",
};

export default function PlanosPage() {
  return (
    <div className="border-b border-line">
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Planos</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              Escolha por etapa ou pacote fechado
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Valores e prazos variam conforme metragem, topografia e nível de detalhamento.
              Use estes planos como ponto de partida na conversa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plano, i) => (
              <Reveal key={plano.id} delayMs={i * 60}>
                <article
                  className={`flex h-full flex-col border bg-white p-8 md:p-10 ${
                    plano.highlight
                      ? "border-brand shadow-[0_2px_12px_rgba(61,111,86,0.12)]"
                      : "border-line"
                  }`}
                >
                  <h2 className="font-serif text-2xl tracking-tight text-ink">{plano.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{plano.pitch}</p>
                  <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Inclui
                  </p>
                  <ul className="mt-4 flex-1 space-y-3">
                    {plano.items.map((line) => (
                      <li key={line} className="flex gap-2 text-sm text-ink/90">
                        <Check
                          className="mt-0.5 shrink-0 text-accent"
                          size={18}
                          weight="bold"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_ORCAMENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md py-3 text-sm font-medium transition-transform active:scale-[0.98] ${
                      plano.highlight
                        ? "bg-brand text-white hover:bg-brand-hover"
                        : "border border-line bg-canvas text-ink"
                    }`}
                  >
                    <i className="bi bi-whatsapp" aria-hidden="true" />
                    Consultar este plano
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
