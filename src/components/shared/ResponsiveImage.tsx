interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * Responsive image component with proper sizes and decoding attributes.
 * All images are WebP — no fallback format needed.
 *
 * When multi-resolution variants are generated (e.g. image-400w.webp,
 * image-800w.webp, image-1200w.webp), add srcSet support here.
 */
export function ResponsiveImage({
  src,
  alt,
  width = 800,
  height = 600,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
  loading = "lazy",
  fetchPriority,
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={loading}
      decoding={loading === "lazy" ? "async" : "auto"}
      fetchPriority={fetchPriority}
    />
  );
}
