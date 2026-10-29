import { WHATSAPP_ORCAMENTO_URL } from "@/lib/contato";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_ORCAMENTO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <i className="bi bi-whatsapp text-3xl md:text-[2rem]" aria-hidden="true" />
    </a>
  );
}
