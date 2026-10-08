import Image from "next/image";
import type { Product } from "@/features/landing/types";
import { WhatsAppCta } from "@/features/consultation/components/WhatsAppCta";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product product--${product.variant}`}>
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes={
            product.variant === "wide"
              ? "(max-width: 900px) 100vw, 85vw"
              : "(max-width: 620px) 90vw, 50vw"
          }
        />
      </div>
      <div className="product-caption">
        <span>{product.number}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <WhatsAppCta
        intent={{ source: "product", productName: product.title }}
        variant="outline"
        className="product-cta"
      />
    </article>
  );
}
