import Image from "next/image";

type PortfolioFigureProps = {
  seed?: string;
  imageSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
};

export function PortfolioFigure({
  seed,
  imageSrc,
  alt,
  className = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fit = "cover",
}: PortfolioFigureProps) {
  const src =
    imageSrc ||
    (seed
      ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/1600/1200`
      : "/portfolio/01.jpeg");
  const isSvg = /\.svg($|\?)/i.test(src);

  return (
    <figure className={`relative overflow-hidden bg-[#FAF9F5] flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className={`h-full w-full ${fit === "contain" ? "object-contain p-1" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
        sizes={sizes}
        priority={priority}
        unoptimized={isSvg}
      />
    </figure>
  );
}
