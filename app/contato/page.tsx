import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Orçamento grátis: WhatsApp, telefone para ligação, e-mail e Instagram da Universo Paisagismo em Belo Horizonte.",
};

export default function ContatoPage() {
  return (
    <div className="border-b border-line">
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Contato</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              Orçamento sem custo
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Conte endereço aproximado, metragem da área e o que deseja alcançar. Retornamos
              com próximos passos e agenda de visita quando fizer sentido.
            </p>
          </Reveal>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
