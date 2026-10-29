export const SITE_URL = "https://universopaisagismo.com.br";

export const SITE_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/portfolio", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/planos", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contato", changeFrequency: "monthly" as const, priority: 0.8 },
];
