import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Universo Paisagismo | Projetos e jardins em Belo Horizonte",
    template: "%s | Universo Paisagismo",
  },
  description:
    "Projetos personalizados, execução e manutenção de jardins em Belo Horizonte e região metropolitana. Visualização em 3D e acompanhamento completo.",
  openGraph: {
    title: "Universo Paisagismo",
    description:
      "Transforme seu jardim com projetos paisagísticos, execução profissional e manutenção.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="font-sans bg-warmwhite text-forest selection:bg-sand/40 selection:text-forest">
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main className="min-h-[calc(100dvh-4rem)] overflow-x-hidden pt-16 sm:pt-20 md:min-h-[calc(100vh-80px)] md:pt-24">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
