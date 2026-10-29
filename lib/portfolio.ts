import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/contato";

export type PortfolioItem = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  imageSeed?: string;
  imageSrc: string;
  images?: string[];
  href?: string;
  hrefLabel?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "projetos-3d",
    title: "Projetos 3D",
    tag: "Projetos 3D",
    description: "Visualização realista em 3D, planta humanizada e maquetes detalhadas para decidir com clareza antes da obra.",
    imageSrc: "/projetos-3d/ac02.png",
    images: [
      "/projetos-3d/ac01.png",
      "/projetos-3d/ac02.png",
      "/projetos-3d/ad01.png",
      "/projetos-3d/ad02.png",
      "/projetos-3d/ae01.png",
      "/hero01.png",
      "/projetos-3d/af01.jpeg",
      "/projetos-3d/af02.jpeg",
      "/projetos-3d/ag01.png",
      "/projetos-3d/ag02.png",
      "/paisagismo/Pablo oliveira - paisagismo/imagem jardim/ChatGPT Image 14 de jun. de 2026, 18_31_46.png",
      "/paisagismo/Pablo oliveira - paisagismo/imagem jardim/ChatGPT Image 14 de jun. de 2026, 16_46_41.png",
      "/paisagismo/Pablo oliveira - paisagismo/imagem jardim/ChatGPT Image 14 de jun. de 2026, 16_48_29.png",
    ],
  },
  {
    slug: "paisagismo",
    title: "Paisagismo",
    tag: "Paisagismo",
    description: "Criação, composição e revitalização de ambientes externos e internos com espécies selecionadas para BH e região.",
    imageSrc: "/before-after/a3.jpeg",
    images: [
      "/before-after/a3.jpeg",
      "/before-after/b3.jpeg",
      "/before-after/c3.jpeg",
      "/before-after/d3.jpeg",
      "/before-after/noka sushi.jpeg",
      "/before-after/WhatsApp Image 2026-09-26 at 21.37.34.jpeg",
      "/pasta de imagem 01/03.jpeg",
      "/paisagismo/Pablo oliveira - paisagismo/fotos obra/WhatsApp Image 2026-09-18 at 21.34.58.jpeg",
      "/paisagismo/Pablo oliveira - paisagismo/fotos obra/WhatsApp Image 2026-09-18 at 21.34.59 (1).jpeg",
      "/paisagismo/Pablo oliveira - paisagismo/fotos obra/WhatsApp Image 2026-09-18 at 21.35.00 (1).jpeg",
      "/paisagismo/Pablo oliveira - paisagismo/fotos obra/WhatsApp Image 2026-09-18 at 21.35.02 (1).jpeg",
      "/paisagismo/Pablo oliveira - paisagismo/fotos obra/WhatsApp Image 2026-09-18 at 21.35.02.jpeg",
      "/paisagismo/WhatsApp Image 2026-10-28 at 23.16.41.jpg",
      "/paisagismo/WhatsApp Image 2026-10-28 at 23.16.40.jpg",
    ],
  },
  {
    slug: "instagram",
    title: "Instagram",
    tag: "Instagram",
    description: "Acompanhe obras, projetos e transformações em tempo real no Instagram da Universo Paisagismo.",
    imageSrc: "/social/instagram-logo.svg",
    href: "https://www.instagram.com/universo_paisagismo",
    hrefLabel: "Abrir Instagram da Universo Paisagismo",
  },
  {
    slug: "consultoria-planejamento",
    title: "Consultoria e Planejamento",
    tag: "Consultoria",
    description: "Diagnóstico completo de insolação, clima, drenagem e direcionamento de espécies para o seu espaço.",
    imageSrc: "/consultoria/capa.jpg",
    href: whatsappUrl(WHATSAPP_MESSAGES.consultoria),
    hrefLabel: "Consultoria e Planejamento no WhatsApp",
  },
];
