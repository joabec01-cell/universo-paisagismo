/** WhatsApp — atendimento por mensagem */
export const WHATSAPP_NUMBER = "5531993915033";
export const WHATSAPP_DISPLAY = "(31) 99391-5033";

/** Telefone — apenas ligação (rodapé e página de contato) */
export const PHONE_NUMBER = "5537998242377";
export const PHONE_DISPLAY = "(37) 99824-2377";
export const PHONE_TEL = `tel:+${PHONE_NUMBER}`;

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Universo Paisagismo e gostaria de conversar sobre um projeto.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const WHATSAPP_MESSAGES = {
  geral: DEFAULT_WHATSAPP_MESSAGE,
  orcamento:
    "Olá! Vim pelo site da Universo Paisagismo e gostaria de solicitar um orçamento.",
  projeto:
    "Olá! Vim pelo site da Universo Paisagismo e gostaria de conversar sobre um projeto paisagístico.",
  contato:
    "Olá! Estou na página de contato do site e gostaria de falar com a equipe da Universo Paisagismo.",
  planoProjeto:
    "Olá! Vim pelo site e tenho interesse no plano de Projeto Paisagístico. Gostaria de um orçamento.",
  planoCompleto:
    "Olá! Vim pelo site e tenho interesse no plano Projeto + Execução. Gostaria de solicitar um orçamento.",
  planoManutencao:
    "Olá! Vim pelo site e tenho interesse em Manutenção e Cuidados. Gostaria de falar com um especialista.",
  avaliacao:
    "Olá! Vim pelo site e gostaria de solicitar uma avaliação do meu espaço.",
  estudo3d:
    "Olá! Vim pelo site e gostaria de solicitar um estudo 3D do meu espaço.",
} as const;

/** URL padrão para CTAs de “Solicitar orçamento” */
export const WHATSAPP_ORCAMENTO_URL = whatsappUrl(WHATSAPP_MESSAGES.orcamento);
