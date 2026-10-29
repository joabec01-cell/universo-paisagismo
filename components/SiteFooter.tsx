import Link from "next/link";
import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from "@/lib/contato";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1F3327] bg-[#0D1F16] text-[#FAF9F5]">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:py-20 md:px-8">
        {/* Grid Principal com 4 Colunas */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* 1. UNIVERSO PAISAGISMO (Logo + Frase institucional) - 4 colunas */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0">
                <Image
                  src="/logo/logo verde verde sem fundo.png"
                  alt="Logo Universo Paisagismo"
                  fill
                  sizes="64px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-2xl tracking-tight text-[#FAF9F5]">
                  Universo
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#C49A63]">
                  Paisagismo
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#D9C5A5]/80 font-light max-w-sm">
              Paisagismo, projetos 3D, execução e cuidado com jardins em Belo Horizonte e região.
            </p>
          </div>

          {/* 2. NAVEGAÇÃO - 2 colunas */}
          <div className="lg:col-span-2 lg:pl-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
              Navegação
            </p>
            <ul className="mt-3 space-y-0.5 sm:mt-4 sm:space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-[#D9C5A5]/85 transition-colors duration-200 hover:text-[#FAF9F5] hover:underline hover:decoration-[#C97832] underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTATO - 3 colunas */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
              Contato
            </p>
            <ul className="mt-3 space-y-1 text-sm text-[#D9C5A5]/85">
              <li>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2.5 transition-colors hover:text-[#FAF9F5]"
                >
                  <i className="bi bi-whatsapp text-[#25D366] text-base" aria-hidden="true" />
                  <span>WhatsApp {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-10 items-center gap-2.5 transition-colors hover:text-[#FAF9F5]"
                >
                  <i className="bi bi-telephone text-[#C49A63] text-base" aria-hidden="true" />
                  <span>Ligar {PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:universopaisagismos@gmail.com"
                  className="inline-flex min-h-10 items-center gap-2.5 break-all transition-colors hover:text-[#FAF9F5]"
                >
                  <i className="bi bi-envelope text-[#C49A63] text-base" aria-hidden="true" />
                  <span>universopaisagismos@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <i className="bi bi-geo-alt text-[#C49A63] text-base mt-0.5 shrink-0" aria-hidden="true" />
                <span>Belo Horizonte e Região Metropolitana</span>
              </li>
            </ul>
          </div>

          {/* 4. REDES SOCIAIS & ATENDIMENTO - 3 colunas */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49A63] font-semibold">
              Redes Sociais
            </p>
            <p className="mt-3 text-xs text-[#D9C5A5]/70 font-light">
              Acompanhe nossas obras em tempo real e transformações semanais.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/universo_paisagismo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Universo Paisagismo"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172D21] border border-[#C49A63]/30 text-[#FAF9F5] shadow-sm transition-all duration-300 hover:bg-[#B9683A] hover:border-[#B9683A] hover:-translate-y-0.5"
              >
                <i className="bi bi-instagram text-base" />
              </a>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Universo Paisagismo"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172D21] border border-[#C49A63]/30 text-[#FAF9F5] shadow-sm transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:-translate-y-0.5"
              >
                <i className="bi bi-whatsapp text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Rodapé Inferior */}
        <div className="mt-14 border-t border-[#1F3327] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9B7A] font-light">
          <p>© 2026 Universo Paisagismo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sobre" className="inline-flex min-h-10 items-center transition-colors hover:text-[#FAF9F5]">
              Privacidade
            </Link>
            <Link href="/sobre" className="inline-flex min-h-10 items-center transition-colors hover:text-[#FAF9F5]">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
